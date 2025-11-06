#!/bin/bash

# Build script para site estático HTML
echo "🚀 Building static HTML site..."

# Criar diretório de saída se não existir
mkdir -p dist/static

echo "📂 Copying HTML files..."
cp index.html dist/static/
cp privacy-policy.html dist/static/
cp 404.html dist/static/

echo "🖼️  Copying assets..."
cp -r assets/* dist/static/

echo "📝 Copying Cloudflare Pages config..."
cp _redirects dist/static/
cp _headers dist/static/

echo "⚡ Copying Cloudflare Functions..."
if [ -d "functions" ]; then
  cp -r functions dist/static/
fi

echo "🔧 Cloudflare Pages configuration applied..."
echo "✅ Static HTML site built successfully!"
echo "📁 Files are in: dist/static/"
echo ""
echo "To test locally, run:"
echo "  cd dist/static && python3 -m http.server 8080"
echo ""
echo "Or deploy the dist/static/ folder to your hosting provider."