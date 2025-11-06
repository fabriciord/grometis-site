# Cloudflare Pages - Configuração de Deploy

Este documento contém as instruções específicas para deploy no **Cloudflare Pages**.

## 🚀 Configuração do Projeto no Cloudflare Pages

### 1. **Configurações de Build**

```
Framework preset: None (Static HTML)
Build command: npm run build
Build output directory: dist/static
Root directory: / (raiz do repositório)
Node.js version: 18+ (opcional, não necessário)
```

### 2. **Configurações Automáticas**

O projeto já está configurado com:

- ✅ **`wrangler.toml`** - Configuração principal
- ✅ **`_redirects`** - Regras de redirecionamento
- ✅ **`_headers`** - Headers de segurança e cache
- ✅ **Build script otimizado** para Cloudflare Pages

### 3. **Deploy via Git (Recomendado)**

1. **Conecte o repositório:**
   - Acesse [dash.cloudflare.com](https://dash.cloudflare.com)
   - Vá para "Pages" → "Create a project"
   - Conecte com GitHub/GitLab
   - Selecione o repositório `grometis-site`

2. **Configure o build:**
   ```
   Build command: npm run build
   Build output directory: dist/static
   ```

3. **Deploy automático:**
   - Cada push para `main` fará deploy automático
   - Preview branches disponíveis para PRs

### 4. **Deploy via CLI (Opcional)**

```bash
# Instalar Wrangler (se não tiver)
npm install -g wrangler

# Login no Cloudflare
wrangler login

# Build do site
npm run build

# Deploy manual
npm run deploy
```

### 5. **URLs do Deploy**

Após o deploy, o site estará disponível em:

- **Produção:** `https://grometis-site.pages.dev`
- **Custom Domain:** Configure seu domínio personalizado
- **Preview:** URLs automáticas para branches

## 🔧 Configurações Técnicas

### **Headers de Segurança**
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### **Cache Otimizado**
- **HTML:** 1 hora (permite atualizações rápidas)
- **Assets (CSS/JS/Images):** 1 ano (imutável)

### **Redirects Configurados**
- `/privacy` → `/privacy-policy.html` (301)
- `/privacidade` → `/privacy-policy.html` (301)
- Páginas não encontradas → `/404.html` (404)

### **Performance**
- ⚡ **Edge Caching** global
- 🌍 **CDN** em 200+ cidades
- 🔒 **SSL/TLS** automático
- 📊 **Analytics** integrado

## 📊 Vantagens do Cloudflare Pages

### **Gratuito Forever**
- ✅ Hosting ilimitado
- ✅ SSL automático
- ✅ CDN global
- ✅ 500 builds/mês

### **Performance Superior**
- ⚡ Edge caching
- 🚀 HTTP/3 automático
- 📈 Core Web Vitals otimizados

### **Desenvolvedor-Friendly**
- 🔄 Deploy automático via Git
- 🌿 Preview branches
- 📊 Analytics detalhado
- 🛠️ Functions (se necessário no futuro)

## 🔍 Monitoramento

### **Analytics Disponíveis:**
- Visitors únicos
- Page views
- Core Web Vitals
- Geolocation dos usuários
- Device breakdown

### **Logs de Deploy:**
- Build logs detalhados
- Deploy history
- Rollback fácil

## 🌐 Domínio Personalizado

1. **Adicionar domínio:**
   - Pages → "Custom domains"
   - Add custom domain
   - Configure DNS (automático se usar Cloudflare DNS)

2. **SSL automático:**
   - Certificado SSL/TLS automático
   - HTTP → HTTPS redirect
   - HSTS headers

## 🚨 Troubleshooting

### **Build Failing?**
```bash
# Testar build local
npm run build
npm run preview
```

### **404 em subpáginas?**
- Verifique se `_redirects` está sendo copiado
- Confirme que `dist/static/_redirects` existe após build

### **Headers não aplicados?**
- Verifique `_headers` no `dist/static/`
- Teste com DevTools → Network

## 📞 Suporte

- **Cloudflare Docs:** [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
- **Community:** [community.cloudflare.com](https://community.cloudflare.com)
- **Status:** [cloudflarestatus.com](https://cloudflarestatus.com)

---

**🎉 Site pronto para deploy no Cloudflare Pages!**