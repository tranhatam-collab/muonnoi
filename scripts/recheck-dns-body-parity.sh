#!/usr/bin/env bash
set -euo pipefail

HOST="${1:-https://www.muonnoi.org/}"
EXPECTED_TITLE="Muôn Nơi | Hạ tầng số cho đời sống thật"
EXPECTED_BRAND="Hạ tầng số cho đời sống thật"
FORBIDDEN="Social Operating Space"

echo "DNS/body parity check"
echo "Target: $HOST"

echo ""
echo "Header check:"
curl -I -L --max-time 15 -sS "$HOST" | sed -n '1,20p'

echo ""
echo "Body check:"
body="$(curl -L --retry 2 --retry-delay 1 --max-time 20 -sS "$HOST")"

if ! printf '%s' "$body" | grep -q "$EXPECTED_TITLE"; then
  echo "FAIL: expected title not found: $EXPECTED_TITLE"
  exit 1
fi

if ! printf '%s' "$body" | grep -q "$EXPECTED_BRAND"; then
  echo "FAIL: expected brand text not found: $EXPECTED_BRAND"
  exit 1
fi

if printf '%s' "$body" | grep -q "$FORBIDDEN"; then
  echo "FAIL: forbidden legacy brand text found: $FORBIDDEN"
  exit 1
fi

echo "PASS: body contains current brand text and no legacy brand phrase."
