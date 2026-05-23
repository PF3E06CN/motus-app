import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const REPONSE_FILE = path.join(projectRoot, 'reponse');

/** En dev uniquement : enregistre le mot mystère dans `reponse` à la racine du projet. */
function motusReponseDevPlugin() {
  return {
    name: 'motus-reponse-dev',
    enforce: 'pre',
    configureServer(server) {
      fs.writeFileSync(
        REPONSE_FILE,
        '# En attente — ouvrez le jeu puis « Jouer » : le mot mystère remplacera cette ligne.\n',
        'utf8'
      );
      console.info(`[motus-reponse] Fichier test (racine projet) : ${REPONSE_FILE}`);

      server.middlewares.use((req, res, next) => {
        const pathname = (req.url ?? '').split('?')[0];
        if (pathname !== '/__motus__/reponse' || req.method !== 'POST') {
          next();
          return;
        }
        const chunks = [];
        req.on('data', (c) => chunks.push(c));
        req.on('end', () => {
          try {
            const body = Buffer.concat(chunks).toString('utf8').trim();
            fs.writeFileSync(REPONSE_FILE, `${body}\n`, 'utf8');
            console.info(`[motus-reponse] Mot enregistré : ${body} → ${REPONSE_FILE}`);
            res.statusCode = 204;
            res.end();
          } catch (e) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end(String(e));
          }
        });
      });
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [motusReponseDevPlugin()],
});
