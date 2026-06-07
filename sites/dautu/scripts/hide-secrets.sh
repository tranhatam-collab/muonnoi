#!/bin/bash
# hide-secrets.sh — Nhập wrangler secrets mà key không hiển thị trên terminal
# Usage: bash scripts/hide-secrets.sh <project-name>
# Sau đó nhập từng key (ký tự sẽ ẩn)

set -e

PROJECT_NAME="${1:-dautu-muonnoi-org}"

echo "=== Nhập secrets cho $PROJECT_NAME ==="
echo "(Ký tự sẽ không hiển thị khi nhập)"
echo ""

printf "MAIL_IAI_ONE_API_KEY: "
read -s MAIL_KEY
echo ""
echo "$MAIL_KEY" | wrangler pages secret put MAIL_IAI_ONE_API_KEY --project-name "$PROJECT_NAME"

echo ""
printf "MAIL_IAI_ONE_TO (email nhận thông báo): "
read -s MAIL_TO
echo ""
echo "$MAIL_TO" | wrangler pages secret put MAIL_IAI_ONE_TO --project-name "$PROJECT_NAME"

echo ""
printf "VERIFY_IAI_ONE_API_KEY: "
read -s VERIFY_KEY
echo ""
echo "$VERIFY_KEY" | wrangler pages secret put VERIFY_IAI_ONE_API_KEY --project-name "$PROJECT_NAME"

echo ""
echo "✅ Đã nhập xong 3 secrets. Kiểm tra:"
wrangler pages secret list --project-name "$PROJECT_NAME"
