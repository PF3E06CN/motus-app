#!/usr/bin/env python3
"""
Serveur de développement Motus (sans Node) :
- sert les fichiers à la racine du projet ;
- GET /sounds/*, /Images/*, etc. → fichiers sous public/ (comme Vite) ;
- accepte POST /__motus__/reponse et écrit le mot dans le fichier `reponse`.
"""

from http.server import HTTPServer, SimpleHTTPRequestHandler
import mimetypes
import os
from urllib.parse import unquote

ROOT = os.path.dirname(os.path.abspath(__file__))
REPONSE = os.path.join(ROOT, "reponse")
PUBLIC_DIR = os.path.normpath(os.path.join(ROOT, "public"))


class MotusDevHandler(SimpleHTTPRequestHandler):
    def _serve_file(self, full: str) -> bool:
        if not os.path.isfile(full):
            return False
        ctype = mimetypes.guess_type(full)[0] or "application/octet-stream"
        data = open(full, "rb").read()
        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)
        return True

    def do_GET(self):
        parsed = unquote(self.path.split("?", 1)[0])
        rel = parsed.lstrip("/")
        if rel and ".." not in rel:
            # Alias explicite : /sounds/foo.mp3 → public/sounds/foo.mp3
            if rel.startswith("sounds/"):
                alias = os.path.normpath(os.path.join(PUBLIC_DIR, rel))
                if alias.startswith(PUBLIC_DIR) and self._serve_file(alias):
                    return
            if rel.startswith("Images/"):
                alias = os.path.normpath(os.path.join(PUBLIC_DIR, rel))
                if alias.startswith(PUBLIC_DIR) and self._serve_file(alias):
                    return
            for base in (ROOT, PUBLIC_DIR):
                full = os.path.normpath(os.path.join(base, rel))
                if full.startswith(base) and self._serve_file(full):
                    return
        super().do_GET()

    def do_POST(self):
        path = self.path.split("?")[0]
        if path != "/__motus__/reponse":
            self.send_error(404)
            return
        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length).decode("utf-8").strip()
        with open(REPONSE, "w", encoding="utf-8") as f:
            f.write(body + "\n")
        print(f"[motus-reponse] {body!r} → {REPONSE}")
        self.send_response(204)
        self.end_headers()

    def log_message(self, fmt, *args):
        if "__motus__" not in str(args):
            super().log_message(fmt, *args)


def main():
    os.chdir(ROOT)
    port = int(os.environ.get("PORT", "8765"))
    with open(REPONSE, "w", encoding="utf-8") as f:
        f.write(
            "# En attente — ouvrez http://127.0.0.1:%d puis « Jouer ».\n" % port
        )
    print("Motus — http://127.0.0.1:%d" % port)
    print("[motus-reponse] fichier : %s" % REPONSE)
    HTTPServer(("127.0.0.1", port), MotusDevHandler).serve_forever()


if __name__ == "__main__":
    main()
