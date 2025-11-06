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

# Criar arquivo _redirects simples para páginas estáticas
echo "📝 Creating static redirects..."
cat > dist/static/_redirects << EOF
# Static HTML redirects
/privacy-policy   /privacy-policy.html   200
/*                /404.html              404
EOF

# Criar arquivo _headers otimizado
echo "🔧 Creating optimized headers..."
cat > dist/static/_headers << EOF
# Headers for static site
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Cache-Control: public, max-age=3600

/*.html
  Cache-Control: public, max-age=300

/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.png
  Cache-Control: public, max-age=31536000, immutable

/*.jpg
  Cache-Control: public, max-age=31536000, immutable

/*.ico
  Cache-Control: public, max-age=31536000, immutable
EOF

echo "✅ Static HTML site built successfully!"
echo "📁 Files are in: dist/static/"
echo ""
echo "To test locally, run:"
echo "  cd dist/static && python3 -m http.server 8080"
echo ""
echo "Or deploy the dist/static/ folder to your hosting provider."