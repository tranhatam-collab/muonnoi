#!/usr/bin/env python3
"""
Generate Open Graph PNG images (1200x630) for Muon Noi subdomains.
Requires Pillow: pip install Pillow

Usage:
    python3 scripts/generate-og-pngs.py
"""
from PIL import Image, ImageDraw, ImageFont
import os

BASE_DIR = "/Users/tranhatam/Documents/Devnewproject/muonnoi.org"
SIZE = (1200, 630)

# Brand colors
BG = "#0a0f14"
ACCENT = "#7c5cff"
TEXT = "#edf2f7"
MUTED = "#8b9bb4"

SITES = [
    {
        "path": f"{BASE_DIR}/assets/og.png",
        "brand": "Muôn Nói · Muon Noi",
        "tagline": "Proof-first · Privacy-first",
        "sub": "Hạ tầng tri thức sống thật",
    },
    {
        "path": f"{BASE_DIR}/ai.muonnoi.org/assets/og-cover.png",
        "brand": "Nhà Chung",
        "tagline": "Cộng đồng và AI cùng nhìn rõ",
        "sub": "ai.muonnoi.org",
    },
    {
        "path": f"{BASE_DIR}/cuocsong.muonnoi.org/public/assets/og.png",
        "brand": "Cuộc Sống Muôn Nơi",
        "tagline": "Life Across Places Layer",
        "sub": "cuocsong.muonnoi.org",
    },
]

def generate(img_path, brand, tagline, sub):
    os.makedirs(os.path.dirname(img_path), exist_ok=True)
    img = Image.new("RGB", SIZE, BG)
    draw = ImageDraw.Draw(img)

    # Draw accent bar
    draw.rectangle([(0, 0), (8, 630)], fill=ACCENT)

    # Try to use a system font, fallback to default
    try:
        font_large = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 56)
        font_medium = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 32)
        font_small = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 24)
    except:
        try:
            font_large = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 56)
            font_medium = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 32)
            font_small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 24)
        except:
            font_large = ImageFont.load_default()
            font_medium = font_large
            font_small = font_large

    # Brand name
    draw.text((80, 200), brand, fill=TEXT, font=font_large)

    # Tagline
    draw.text((80, 290), tagline, fill=ACCENT, font=font_medium)

    # Sub / URL
    draw.text((80, 360), sub, fill=MUTED, font=font_small)

    # Bottom right watermark
    draw.text((900, 580), "muonnoi.org", fill=MUTED, font=font_small)

    img.save(img_path, "PNG")
    print(f"Generated: {img_path}")

if __name__ == "__main__":
    for site in SITES:
        generate(site["path"], site["brand"], site["tagline"], site["sub"])
    print("Done. Install Pillow first if needed: pip install Pillow")
