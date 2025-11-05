# Configuração do Cloudflare Pages

Este arquivo contém as instruções para configurar o projeto no Cloudflare Pages.

## Configuração no Dashboard do Cloudflare Pages

### 1. Configurações de Build

- **Framework preset**: Vite
- **Build command**: `pnpm run build:pages`
- **Build output directory**: `dist/public`
- **Root directory**: `/` (raiz do repositório)
- **Node.js version**: `18` ou superior

### 2. Variáveis de Ambiente

Adicione as seguintes variáveis no dashboard do Cloudflare Pages:

```
NODE_ENV=production
```

### 3. Domínio Personalizado (Opcional)

Configure seu domínio personalizado nas configurações do projeto no Cloudflare Pages.

## Comandos Locais

### Desenvolvimento
```bash
pnpm dev
```

### Build para Cloudflare Pages
```bash
pnpm run build:pages
```

### Preview local com Cloudflare Pages
```bash
pnpm run preview:pages
```

### Deploy manual (após configurar wrangler)
```bash
pnpm run deploy:pages
```

## Configuração do Wrangler (Opcional)

Para usar o deploy via CLI, execute:

```bash
npx wrangler login
```

Depois configure o projeto no wrangler.toml com o nome correto do seu projeto.

## Recursos Configurados

- ✅ Headers de segurança
- ✅ Cache otimizado para assets estáticos
- ✅ Redirects para SPA (Single Page Application)
- ✅ Configuração de build otimizada
- ✅ Support para variables de ambiente