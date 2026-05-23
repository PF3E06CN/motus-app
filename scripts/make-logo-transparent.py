#!/usr/bin/env python3
"""Retire le fond rouge du logo Motus ; conserve texte, boule et ombre."""

from __future__ import annotations

import sys
from collections import deque
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
# Logo livré en PNG transparent : placer le fichier dans Images/motus-logo.png
SRC = ROOT / "Images" / "motus-logo-source.jpg"
OUT = ROOT / "Images" / "motus-logo.png"
OUT_PUBLIC = ROOT / "public" / "Images" / "motus-logo.png"


def luminance(r: int, g: int, b: int) -> float:
    return 0.299 * r + 0.587 * g + 0.114 * b


def is_white_text(r: int, g: int, b: int) -> bool:
    return r > 188 and g > 188 and b > 175


def is_ball(r: int, g: int, b: int) -> bool:
    return r > 130 and g > 65 and b < 140 and r >= g - 20


def is_drop_shadow(r: int, g: int, b: int, y: int, h: int) -> bool:
    lum = luminance(r, g, b)
    if is_white_text(r, g, b) or is_ball(r, g, b) or lum >= 100:
        return False
    # Ombre portée + reflet : bande basse ou rouge très sombre
    return y >= int(h * 0.38) or lum < 72


def is_red_background(r: int, g: int, b: int) -> bool:
    if is_white_text(r, g, b) or is_ball(r, g, b):
        return False
    lum = luminance(r, g, b)
    if lum < 48:
        return False
    return r > 60 and r >= g - 10 and r >= b - 10


def flood_background(w: int, h: int, is_bg) -> list[list[bool]]:
    visited = [[False] * w for _ in range(h)]
    q: deque[tuple[int, int]] = deque()

    def seed(x: int, y: int) -> None:
        if is_bg(x, y) and not visited[y][x]:
            visited[y][x] = True
            q.append((x, y))

    for x in range(w):
        seed(x, 0)
        seed(x, h - 1)
    for y in range(h):
        seed(0, y)
        seed(w - 1, y)

    while q:
        x, y = q.popleft()
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx] and is_bg(nx, ny):
                visited[ny][nx] = True
                q.append((nx, ny))

    return visited


def shadow_alpha(r: int, g: int, b: int) -> int:
    lum = luminance(r, g, b)
    return int(min(200, max(50, 235 - lum * 1.55)))


def process(src: Path, dest: Path) -> None:
    im = Image.open(src).convert("RGBA")
    w, h = im.size
    px = im.load()
    rgb = [[px[x, y][:3] for x in range(w)] for y in range(h)]

    def bg_at(x: int, y: int) -> bool:
        r, g, b = rgb[y][x]
        return is_red_background(r, g, b)

    flooded = flood_background(w, h, bg_at)

    for y in range(h):
        for x in range(w):
            r, g, b = rgb[y][x]
            if flooded[y][x]:
                px[x, y] = (r, g, b, 0)
            elif is_white_text(r, g, b) or is_ball(r, g, b):
                px[x, y] = (r, g, b, 255)
            elif is_drop_shadow(r, g, b, y, h):
                px[x, y] = (r, g, b, shadow_alpha(r, g, b))
            else:
                px[x, y] = (r, g, b, 255)

    dest.parent.mkdir(parents=True, exist_ok=True)
    im.save(dest, "PNG", optimize=True)
    print(f"Écrit {dest} ({w}×{h})")


def main() -> int:
    src = Path(sys.argv[1]) if len(sys.argv) > 1 else SRC
    if not src.is_file():
        print(f"Fichier introuvable : {src}", file=sys.stderr)
        return 1
    process(src, OUT)
    process(src, OUT_PUBLIC)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
