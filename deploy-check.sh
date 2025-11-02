#!/bin/bash

# Script para verificar configuração de deploy
echo "🚀 Verificando configuração de deploy..."

# Verificar se o build funciona
echo "📦 Testando build..."
if pnpm build; then
    echo "✅ Build executado com sucesso"
else
    echo "❌ Erro no build"
    exit 1
fi

# Verificar arquivos essenciais
echo "📋 Verificando arquivos de configuração..."

if [ -f "amplify.yml" ]; then
    echo "✅ amplify.yml encontrado"
else
    echo "❌ amplify.yml não encontrado"
fi

if [ -f "Dockerfile" ]; then
    echo "✅ Dockerfile encontrado"
else
    echo "❌ Dockerfile não encontrado"
fi

# Verificar se o servidor inicia
echo "🖥️  Testando servidor local..."
echo "Execute 'pnpm start' para testar o servidor"

echo ""
echo "📝 Próximos passos:"
echo "1. Commit e push dos arquivos para seu repositório"
echo "2. Configurar AWS Amplify"
echo "3. Adicionar domínio no Amplify"
echo "4. Configurar DNS no Cloudflare"
echo ""
echo "🌐 Seu domínio: [SEU_DOMINIO]"
echo "🔗 URL do Amplify: [Será fornecida após deploy]"