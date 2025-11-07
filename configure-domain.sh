#!/bin/bash

# 🌐 Script de Configuração de Domínio Customizado
# Para configurar grometis.com e www.grometis.com no Cloudflare Pages

echo "🚀 Configurando domínio customizado para Cloudflare Pages..."

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configurações
PROJECT_NAME="grometis-site"
DOMAIN="grometis.com"
SUBDOMAIN="www.grometis.com"

echo -e "${BLUE}📋 Projeto: ${PROJECT_NAME}${NC}"
echo -e "${BLUE}🌍 Domínio Principal: ${DOMAIN}${NC}"
echo -e "${BLUE}🌍 Subdomínio: ${SUBDOMAIN}${NC}"
echo ""

# Verificar se wrangler está logado
echo -e "${YELLOW}🔐 Verificando autenticação...${NC}"
if wrangler whoami > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Autenticado com sucesso${NC}"
else
    echo -e "${RED}❌ Não autenticado. Execute: wrangler login${NC}"
    exit 1
fi

# Verificar se o projeto existe
echo -e "${YELLOW}📁 Verificando projeto...${NC}"
if wrangler pages project list | grep -q "$PROJECT_NAME"; then
    echo -e "${GREEN}✅ Projeto '$PROJECT_NAME' encontrado${NC}"
else
    echo -e "${RED}❌ Projeto '$PROJECT_NAME' não encontrado${NC}"
    exit 1
fi

echo ""
echo -e "${YELLOW}⚠️  ATENÇÃO: Configuração de domínios customizados deve ser feita via dashboard${NC}"
echo ""
echo -e "${BLUE}📝 Passos para configurar o domínio:${NC}"
echo ""
echo "1️⃣  Acesse: https://dash.cloudflare.com"
echo "2️⃣  Vá para: Pages > $PROJECT_NAME"
echo "3️⃣  Clique em: 'Custom domains'"
echo "4️⃣  Adicione os domínios:"
echo "    - $DOMAIN"
echo "    - $SUBDOMAIN"
echo ""
echo -e "${BLUE}🔧 Configurações DNS necessárias:${NC}"
echo ""
echo "Para $DOMAIN:"
echo "  Tipo: CNAME"
echo "  Nome: @ (ou $DOMAIN)"
echo "  Valor: $PROJECT_NAME.pages.dev"
echo ""
echo "Para $SUBDOMAIN:"
echo "  Tipo: CNAME"
echo "  Nome: www"
echo "  Valor: $PROJECT_NAME.pages.dev"
echo ""

# Abrir dashboard automaticamente (macOS)
read -p "🌐 Abrir dashboard do Cloudflare automaticamente? (y/n): " open_dashboard
if [[ $open_dashboard =~ ^[Yy]$ ]]; then
    echo -e "${BLUE}🚀 Abrindo dashboard...${NC}"
    open "https://dash.cloudflare.com"
fi

echo ""
echo -e "${GREEN}📚 Documentação completa salva em: CONFIGURACAO_DOMINIO.md${NC}"
echo -e "${GREEN}🎉 Após configurar o DNS, seu site estará disponível em:${NC}"
echo -e "${GREEN}   - https://$DOMAIN${NC}"
echo -e "${GREEN}   - https://$SUBDOMAIN${NC}"
echo ""
echo -e "${YELLOW}⏰ Lembre-se: Propagação DNS pode levar até 48 horas${NC}"