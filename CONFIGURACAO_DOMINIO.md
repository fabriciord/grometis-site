# 🌐 Configuração do Domínio Customizado - grometis.com

## 📋 Pré-requisitos
- ✅ Site já implantado no Cloudflare Pages
- ✅ Domínio `grometis.com` registrado
- ✅ Acesso ao painel DNS do domínio

## 🚀 Passo a Passo - Configuração no Cloudflare Pages

### 1️⃣ Acesso ao Dashboard
1. Acesse: https://dash.cloudflare.com
2. Faça login na sua conta
3. Vá para **Pages** > **grometis-site**

### 2️⃣ Adicionar Domínio Customizado
1. No projeto `grometis-site`, clique na aba **Custom domains**
2. Clique em **Set up a custom domain**
3. Digite: `grometis.com`
4. Clique em **Continue**
5. Repita o processo para `www.grometis.com`

### 3️⃣ Configuração DNS
Depois de adicionar os domínios, você receberá registros DNS para configurar:

#### Para grometis.com:
```
Tipo: CNAME
Nome: grometis.com (ou @)
Valor: grometis-site.pages.dev
TTL: Auto ou 3600
```

#### Para www.grometis.com:
```
Tipo: CNAME
Nome: www
Valor: grometis-site.pages.dev
TTL: Auto ou 3600
```

### 4️⃣ Configuração no seu Provedor DNS
1. Acesse o painel do seu registrador de domínio
2. Vá para as configurações DNS
3. Adicione os registros CNAME acima
4. Salve as alterações

### 5️⃣ Verificação e Ativação
1. Volte ao dashboard do Cloudflare Pages
2. Aguarde a verificação DNS (pode levar até 24h)
3. Quando verificado, os domínios aparecerão como **Active**

## ⚡ Configuração de Redirecionamento

### Opção 1: www → grometis.com (Recomendado)
```
Tipo: CNAME
Nome: www
Valor: grometis.com
```

### Opção 2: grometis.com → www.grometis.com
```
Tipo: A
Nome: @
Valor: 192.0.2.1 (IP de redirecionamento)
```

## 🔧 Configuração Avançada

### Certificado SSL
- ✅ Automático: Cloudflare gera certificados SSL gratuitos
- ✅ Renovação: Automática
- ✅ Força HTTPS: Habilitado por padrão

### Headers de Segurança
Os seguintes headers já estão configurados no arquivo `_headers`:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## 📊 Monitoramento

### URLs Finais Funcionais:
- ✅ `https://grometis.com`
- ✅ `https://www.grometis.com`
- ✅ `https://grometis.com/privacy-policy`
- ✅ `https://www.grometis.com/privacy-policy`

### Ferramentas de Teste:
- DNS Checker: https://dnschecker.org
- SSL Test: https://www.ssllabs.com/ssltest/
- Speed Test: https://pagespeed.web.dev

## 🆘 Troubleshooting

### Problemas Comuns:
1. **DNS não resolve**: Aguarde propagação (até 48h)
2. **SSL não ativo**: Aguarde geração do certificado (até 24h)
3. **Redirecionamento em loop**: Verifique configuração de redirecionamento

### Comandos Úteis:
```bash
# Testar DNS
dig grometis.com
nslookup grometis.com

# Testar SSL
curl -I https://grometis.com

# Deploy após configuração
npm run build
wrangler pages deploy dist/static --project-name grometis-site
```

## 📝 Notas Importantes

1. **Propagação DNS**: Pode levar de 1-48 horas
2. **SSL Certificate**: Geração automática em até 24 horas
3. **CDN Global**: Ativo automaticamente
4. **Performance**: Otimizada globalmente
5. **Analytics**: Disponível no dashboard

---

💡 **Dica**: Depois de configurado, teste sempre com navegação anônima para evitar cache local.

🚀 **Status Atual**: Site funcionando em https://grometis-site.pages.dev
📅 **Próximo Passo**: Configurar DNS para grometis.com