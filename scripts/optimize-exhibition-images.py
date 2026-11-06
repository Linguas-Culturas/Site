"""Optimize Yo Artista exhibition images for the web.

Creates WebP copies with a maximum side of 1920 px. Originals are only
removed when --delete-originals is passed and every generated file has been
successfully verified.
"""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
FOLDERS = (ROOT / "assets" / "obras2025", ROOT / "assets" / "obras2026")
MAX_SIDE = 1920


def jpeg_files() -> list[Path]:
    return sorted(
        path
        for folder in FOLDERS
        for path in folder.iterdir()
        if path.is_file() and path.suffix.lower() in {".jpg", ".jpeg"}
    )


def convert(source: Path) -> Path:
    destination = source.with_suffix(".webp")
    if not destination.exists():
        with Image.open(source) as image:
            image = ImageOps.exif_transpose(image)
            if image.mode not in {"RGB", "RGBA"}:
                image = image.convert("RGB")
            image.thumbnail((MAX_SIDE, MAX_SIDE), Image.Resampling.LANCZOS)
            image.save(destination, "WEBP", quality=82, method=4)
    with Image.open(destination) as output:
        output.verify()
    return destination


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--delete-originals", action="store_true")
    args = parser.parse_args()

    sources = jpeg_files()
    before = sum(path.stat().st_size for path in sources)
    converted: list[tuple[Path, Path]] = []

    for index, source in enumerate(sources, 1):
        destination = convert(source)
        converted.append((source, destination))
        if index % 20 == 0 or index == len(sources):
            print(f"Converted {index}/{len(sources)}")

    after = sum(destination.stat().st_size for _, destination in converted)
    print(f"JPEG total: {before / 1024 / 1024:.2f} MB")
    print(f"WebP total: {after / 1024 / 1024:.2f} MB")

    if args.delete_originals:
        for source, destination in converted:
            if not destination.exists() or destination.stat().st_size == 0:
                raise RuntimeError(f"Invalid output for {source}")
        for source, _ in converted:
            source.unlink()
        print(f"Removed {len(converted)} verified JPEG originals")


if __name__ == "__main__":
    main()
