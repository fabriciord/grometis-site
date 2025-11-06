# GrOMEtiS - Site Estático HTML

Este é o site 100% HTML estático da **GrOMEtiS Software & Integration**, convertido do projeto React original para HTML puro com CSS interno e JavaScript mínimo.

## 🚀 O que foi feito

### ✅ **Conversão Completa para HTML Estático**
- ❌ **Removido:** Todo o código React, JSX, TypeScript
- ❌ **Removido:** Dependências do Node.js, bibliotecas externas  
- ❌ **Removido:** Sistema de build complexo
- ✅ **Mantido:** Todo o conteúdo e funcionalidades das páginas
- ✅ **Mantido:** Design responsivo e animações
- ✅ **Mantido:** Performance otimizada

### 📄 **Páginas Criadas**
1. **`index.html`** - Homepage principal
2. **`privacy-policy.html`** - Política de Privacidade
3. **`404.html`** - Página de erro 404

### 🎨 **Recursos Técnicos**
- **CSS Interno:** Todo o styling está dentro dos arquivos HTML
- **JavaScript Vanilla:** Apenas JS puro para animações e interatividade
- **Responsivo:** Design adaptativo para mobile, tablet e desktop
- **SEO Otimizado:** Meta tags, estrutura semântica
- **Performance:** Carregamento rápido, sem dependências externas
- **Acessibilidade:** Estrutura HTML semântica e navegação por teclado

## 🛠️ **Como usar**

### **Build do Site Estático**
```bash
npm run build:static
```

### **Preview Local**
```bash
npm run preview:static
```
Ou manualmente:
```bash
cd dist/static
python3 -m http.server 8080
```

### **Deploy**
Simplesmente envie o conteúdo da pasta `dist/static/` para qualquer provedor de hospedagem:
- **Netlify:** Arraste e solte a pasta
- **Vercel:** Deploy da pasta static
- **GitHub Pages:** Commit da pasta static
- **Cloudflare Pages:** Upload da pasta
- **AWS S3:** Sync da pasta
- **Qualquer hosting tradicional:** FTP/SFTP da pasta

## 📁 **Estrutura dos Arquivos**

```
dist/static/
├── index.html              # Homepage
├── privacy-policy.html     # Política de Privacidade  
├── 404.html               # Página de erro
├── _redirects             # Redirects para hosting
├── _headers               # Headers de segurança
├── favicon.ico            # Favicon
├── grometis_favicon.png   # Favicon PNG
├── grometis_logo_horizontal.png
├── grometis_logo_principal.png
├── grometis_logo_variation2.png
└── Grometis_laranja.png
```

## 🌟 **Vantagens do Site Estático**

### **Performance**
- ⚡ **Carregamento ultra-rápido** 
- 📦 **Tamanho mínimo** (sem bibliotecas)
- 🚀 **Core Web Vitals otimizados**

### **Segurança**
- 🔒 **Sem vulnerabilidades de servidor**
- 🛡️ **Sem banco de dados para atacar**
- ✅ **Headers de segurança configurados**

### **Manutenção**
- 🔧 **Zero dependências** para quebrar
- 📝 **Fácil de editar** (HTML/CSS/JS puro)
- 🔄 **Sem atualizações de frameworks**

### **Hospedagem**
- 💰 **Hosting gratuito** (GitHub Pages, Netlify, etc.)
- 🌍 **CDN global** automático
- 📈 **Escalabilidade infinita**

### **SEO**
- 🔍 **HTML semântico** para buscadores
- ⚡ **Carregamento instantâneo**
- 📱 **Mobile-first** responsivo

## 🎯 **Funcionalidades Mantidas**

✅ **Layout Responsivo**  
✅ **Animações Suaves**  
✅ **Navegação por Âncoras**  
✅ **Formulário de Contato**  
✅ **Design Moderno**  
✅ **Otimização para Mobile**  
✅ **Acessibilidade**  
✅ **Performance**  

## 📱 **Compatibilidade**

- ✅ **Todos os navegadores modernos**
- ✅ **IE11+** (com degradação graceful)
- ✅ **Mobile Safari, Chrome Mobile**
- ✅ **Tablets e dispositivos touch**

## 🔧 **Customização**

Para personalizar o site:

1. **Conteúdo:** Edite diretamente os arquivos HTML
2. **Estilos:** Modifique as seções `<style>` nos arquivos
3. **Imagens:** Substitua os arquivos PNG na pasta
4. **Build:** Execute `npm run build:static` após mudanças

## 📞 **Contato**

- **Email:** grometis@grometis.com
- **Telefone:** +55 (11) 98753-2441
- **Website:** https://grometis-site.pages.dev

---

**GrOMEtiS Software & Integration**  
*Transformando ideias em soluções digitais*