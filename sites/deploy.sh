#!/bin/bash
# Deploy dulich + hoctap to Cloudflare Pages
# Usage: ./sites/deploy.sh

set -e

echo "=== Deploying dulich.muonnoi.org ==="
cd sites/dulich
npm install
npm run build
wrangler pages deploy dist --project-name=dulich-muonnoi-org
cd ../..

echo "=== Deploying hoctap.muonnoi.org ==="
cd sites/hoctap
npm install
npm run build
wrangler pages deploy dist --project-name=hoctap-muonnoi-org
cd ../..

echo "=== Done ==="
echo "Verify:"
echo "  curl -I https://dulich.muonnoi.org"
echo "  curl -I https://hoctap.muonnoi.org"
