# <img src="https://api.iconify.design/material-symbols:rocket-launch.svg?color=%23333" width="32"/> Guia de Deploy do BotZap

<div align="center">

[![Vercel](https://img.shields.io/badge/Vercel-Recomendado-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Netlify](https://img.shields.io/badge/Netlify-Suportado-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-Suportado-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Suportado-181717?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)

**Manual completo de implantação do BotZap em diversos ambientes**

</div>

<div align="center">
  <a href="README.md"><img src="https://img.shields.io/badge/🏠_Voltar_para_README-007396?style=for-the-badge" alt="Voltar para README"></a>
  <a href="TECHNICAL.md"><img src="https://img.shields.io/badge/🔧_Documentação_Técnica-004D40?style=for-the-badge" alt="Documentação Técnica"></a>
  <a href="OFFLINE.md"><img src="https://img.shields.io/badge/📱_PWA_e_Offline-5A0FC8?style=for-the-badge" alt="PWA e Offline"></a>
</div>

---

## 📋 Índice

<div align="center">
  <table>
    <tr>
      <td align="center"><a href="#-pré-requisitos"><img src="https://api.iconify.design/material-symbols:check-circle.svg" width="24"/><br/>Pré-requisitos</a></td>
      <td align="center"><a href="#%EF%B8%8F-ambientes-recomendados"><img src="https://api.iconify.design/material-symbols:cloud.svg" width="24"/><br/>Ambientes</a></td>
      <td align="center"><a href="#-vercel"><img src="https://api.iconify.design/logos:vercel-icon.svg" width="24"/><br/>Vercel</a></td>
      <td align="center"><a href="#-netlify"><img src="https://api.iconify.design/logos:netlify-icon.svg" width="24"/><br/>Netlify</a></td>
    </tr>
    <tr>
      <td align="center"><a href="#-cloudflare-pages"><img src="https://api.iconify.design/logos:cloudflare.svg" width="24"/><br/>Cloudflare</a></td>
      <td align="center"><a href="#-docker"><img src="https://api.iconify.design/logos:docker-icon.svg" width="24"/><br/>Docker</a></td>
      <td align="center"><a href="#-configuração-de-domínio"><img src="https://api.iconify.design/material-symbols:domain.svg" width="24"/><br/>Domínio</a></td>
      <td align="center"><a href="#-monitoramento"><img src="https://api.iconify.design/material-symbols:monitoring.svg" width="24"/><br/>Monitoramento</a></td>
    </tr>
  </table>
</div>

## ✔️ Pré-requisitos

<div align="center">
  <img src="https://api.iconify.design/material-symbols:check-circle.svg" width="84" height="84" alt="Pré-requisitos" />
</div>

<div style="background: linear-gradient(135deg, rgba(51,51,51,0.05) 0%, rgba(51,51,51,0.1) 100%); padding: 2rem; border-radius: 0.75rem; margin: 1.5rem 0;">

Antes de iniciar o deploy, certifique-se de que você tem:

- **Node.js 18+** instalado em sua máquina de desenvolvimento
- **Git** para controle de versão
- **npm** ou **yarn** atualizados
- **Build otimizado** pronto para produção
- **Variáveis de ambiente** configuradas corretamente

</div>

### Preparação do Projeto

Execute os seguintes comandos para preparar o projeto para deploy:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```bash
# Instalar dependências
npm install --legacy-peer-deps

# Executar build de produção
npm run build

# Verificar build localmente
npm run preview
```

</div>

> **NOTA**: A flag `--legacy-peer-deps` é necessária para resolver conflitos de dependências com React 19. Isso é especialmente importante após a atualização de React 18 para React 19 realizada em maio de 2025.

</div>

### Estrutura do Build

Após executar `npm run build`, a pasta `dist` será criada com os seguintes arquivos otimizados para produção:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```
dist/
├── assets/
│   ├── index-[hash].css
│   ├── index-[hash].js
│   └── images/
├── icons/
├── manifest.json
├── index.html
├── service-worker.js
└── offline.html
```

</div>

## ☁️ Ambientes Recomendados

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
  <!-- Vercel -->
  <div style="border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(0,0,0,0.05); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <div style="width: 48px; height: 48px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; margin-right: 1rem; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        <img src="https://api.iconify.design/logos:vercel-icon.svg" width="28" height="28" alt="Vercel" />
      </div>
      <h3 style="font-size: 1.25rem; margin: 0;">Vercel</h3>
    </div>
    <p><strong>✅ Recomendado</strong> para a maioria dos casos devido à facilidade de configuração, integrações e bom desempenho com projetos React.</p>
    <div style="font-size: 0.9rem; color: #555;">
      <span style="display: block; margin-top: 0.5rem;">
        <strong>Pontos fortes:</strong> Integração com GitHub, CI/CD automatizado, bom suporte para SPAs, CDN global
      </span>
    </div>
  </div>
  
  <!-- Netlify -->
  <div style="border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(0,199,183,0.05); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <div style="width: 48px; height: 48px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; margin-right: 1rem; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        <img src="https://api.iconify.design/logos:netlify.svg" width="28" height="28" alt="Netlify" />
      </div>
      <h3 style="font-size: 1.25rem; margin: 0;">Netlify</h3>
    </div>
    <p><strong>🔄 Alternativa sólida</strong> com recursos adicionais como formulários integrados e gerenciamento de identidade.</p>
    <div style="font-size: 0.9rem; color: #555;">
      <span style="display: block; margin-top: 0.5rem;">
        <strong>Pontos fortes:</strong> Forms, funções Lambda, CMS headless, previews de deploy
      </span>
    </div>
  </div>
  
  <!-- Cloudflare Pages -->
  <div style="border-radius: 0.75rem; padding: 1.5rem; background-color: rgba(243,128,32,0.05); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
      <div style="width: 48px; height: 48px; border-radius: 50%; background-color: white; display: flex; align-items: center; justify-content: center; margin-right: 1rem; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        <img src="https://api.iconify.design/logos:cloudflare.svg" width="28" height="28" alt="Cloudflare" />
      </div>
      <h3 style="font-size: 1.25rem; margin: 0;">Cloudflare Pages</h3>
    </div>
    <p><strong>🚀 Opção de alto desempenho</strong> com ótima integração para quem já usa outros serviços da Cloudflare.</p>
    <div style="font-size: 0.9rem; color: #555;">
      <span style="display: block; margin-top: 0.5rem;">
        <strong>Pontos fortes:</strong> Workers, rede global, analytics, proteção DDoS integrada
      </span>
    </div>
  </div>
</div>

<div style="margin: 1.5rem 0; padding: 1rem; background-color: #fff3cd; border-radius: 0.5rem; border-left: 3px solid #ffc107; font-size: 0.9rem;">
  <p style="margin: 0;">
    <strong>⚠️ Nota:</strong> Independentemente da plataforma escolhida, certifique-se de verificar as configurações necessárias para o Service Worker funcionar corretamente no ambiente de produção.
  </p>
</div>

## 🔼 Vercel

<div align="center">
  <img src="https://api.iconify.design/logos:vercel.svg" width="140" alt="Vercel" />
</div>

### Deploy na Vercel

<div style="background: linear-gradient(135deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.05) 100%); padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0;">

O deploy na Vercel é simplificado e pode ser feito em poucos passos:

1. **Crie uma conta** na [Vercel](https://vercel.com)
2. **Conecte seu repositório** do GitHub/GitLab/Bitbucket
3. **Importe o projeto** e siga as instruções de configuração
4. A Vercel **detectará automaticamente** que é um projeto Vite/React

</div>

### Configuração do projeto na Vercel

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-size: 0.9rem;">

<div style="margin-bottom: 1rem;">
  <strong>Framework Preset:</strong> Vite
</div>

<div style="margin-bottom: 1rem;">
  <strong>Build Command:</strong> <code>npm run build</code>
</div>

<div style="margin-bottom: 1rem;">
  <strong>Output Directory:</strong> <code>dist</code>
</div>

<div style="margin-bottom: 0.5rem;">
  <strong>Variáveis de Ambiente:</strong>
</div>
<ul style="padding-left: 1.5rem; margin: 0.5rem 0;">
  <li><code>VITE_API_URL</code> - URL da API do BotZap</li>
  <li><code>VITE_ANALYTICS_ID</code> - ID do Google Analytics</li>
  <li><code>VITE_WHATSAPP_NUMBER</code> - Número de WhatsApp padrão</li>
  <li><code>VITE_SENTRY_DSN</code> - DSN para monitoramento de erros no Sentry</li>
  <li><code>VITE_FEATURE_FLAGS</code> - JSON com flags de recursos experimentais</li>
</ul>

<div style="background-color: #e8f4fd; padding: 0.75rem; border-radius: 0.5rem; margin: 0.75rem 0; font-size: 0.9rem;">
  <strong>💡 Dica avançada:</strong> Utilize o sistema de <a href="https://vercel.com/docs/concepts/projects/environment-variables/system-environment-variables" target="_blank">variáveis de ambiente do sistema</a> da Vercel, como <code>VERCEL_URL</code> e <code>VERCEL_ENV</code> para ajustar comportamentos específicos.
</div>

</div>

### Configuração do arquivo `vercel.json`

Crie um arquivo `vercel.json` na raiz do projeto com estas configurações aprimoradas:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```json
{
  "routes": [
    {
      "src": "/service-worker.js",
      "headers": {
        "cache-control": "public, max-age=0, must-revalidate",
        "Service-Worker-Allowed": "/"
      }
    },
    {
      "src": "/assets/(.*)",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    {
      "src": "/(.*)\\.(png|jpg|webp|svg|gif|woff|woff2)",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    {
      "src": "/manifest.json",
      "headers": {
        "cache-control": "public, max-age=0, must-revalidate",
        "Content-Type": "application/manifest+json"
      }
    },
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html",
      "headers": {
        "cache-control": "public, max-age=0, must-revalidate",
        "X-Frame-Options": "DENY",
        "X-Content-Type-Options": "nosniff",
        "X-XSS-Protection": "1; mode=block",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy": "camera=(), microphone=(), geolocation=(self)"
      }
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=63072000; includeSubDomains; preload"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' https://www.googletagmanager.com https://plausible.io; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.botzap.com https://sentry.io; font-src 'self'; frame-src 'self'; base-uri 'self'; form-action 'self'"
        }
      ]
    }
  ],
  "cleanUrls": true,
  "trailingSlash": false,
  "github": {
    "silent": true,
    "autoJobCancelation": true
  },
  "analyticsId": "${VERCEL_ANALYTICS_ID}"
}
```

</div>

## 🟢 Netlify

<div align="center">
  <img src="https://api.iconify.design/logos:netlify.svg" width="140" alt="Netlify" />
</div>

### Deploy no Netlify

<div style="background: linear-gradient(135deg, rgba(0,199,183,0.02) 0%, rgba(0,199,183,0.05) 100%); padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0;">

1. **Crie uma conta** no [Netlify](https://netlify.com)
2. Clique em **New site from Git**
3. Selecione seu provedor Git e o repositório
4. Configure as opções de build conforme indicado abaixo
5. Clique em **Deploy site**

</div>

### Configuração do projeto no Netlify

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-size: 0.9rem;">

<div style="margin-bottom: 1rem;">
  <strong>Build Command:</strong> <code>npm run build</code>
</div>

<div style="margin-bottom: 1rem;">
  <strong>Publish Directory:</strong> <code>dist</code>
</div>

<div style="margin-bottom: 0.5rem;">
  <strong>Variáveis de Ambiente:</strong>
</div>
<ul style="padding-left: 1.5rem; margin: 0.5rem 0;">
  <li>Igual às variáveis da Vercel, mas definidas no painel do Netlify</li>
</ul>

</div>

### Arquivo `netlify.toml`

Crie um arquivo `netlify.toml` na raiz do projeto com as seguintes configurações:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.png"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/service-worker.js"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
```

</div>

### Funções Netlify para Backend (Opcional)

Se precisar de funcionalidades de backend:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```js
// netlify/functions/webhook.js
exports.handler = async function(event, context) {
  try {
    // Lógica para processar webhooks
    const body = JSON.parse(event.body);
    
    // Processar dados
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Webhook recebido com sucesso" })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
```

</div>

## ☁️ Cloudflare Pages

<div align="center">
  <img src="https://api.iconify.design/logos:cloudflare.svg" width="140" alt="Cloudflare Pages" />
</div>

### Deploy no Cloudflare Pages

<div style="background: linear-gradient(135deg, rgba(243,128,32,0.02) 0%, rgba(243,128,32,0.05) 100%); padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0;">

1. **Faça login** no [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navegue até **Pages** e clique em **Create a project**
3. Conecte sua conta GitHub/GitLab e selecione o repositório
4. Configure as opções de build conforme indicado abaixo
5. Clique em **Save and Deploy**

</div>

### Configuração do projeto no Cloudflare Pages

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-size: 0.9rem;">

<div style="margin-bottom: 1rem;">
  <strong>Framework preset:</strong> Vite
</div>

<div style="margin-bottom: 1rem;">
  <strong>Build command:</strong> <code>npm run build</code>
</div>

<div style="margin-bottom: 1rem;">
  <strong>Build output directory:</strong> <code>dist</code>
</div>

<div style="margin-bottom: 0.5rem;">
  <strong>Variáveis de Ambiente:</strong>
</div>
<ul style="padding-left: 1.5rem; margin: 0.5rem 0;">
  <li>Configurar as mesmas variáveis no painel do Cloudflare Pages</li>
</ul>

</div>

### Combinando com Cloudflare Workers

Para funcionalidades de backend, você pode criar um Cloudflare Worker:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```js
// workers/api/index.js
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  if (url.pathname.startsWith('/api/messages')) {
    // Processar mensagens
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' }
    })
  }
  
  return new Response('Not found', { status: 404 })
}
```

</div>

### Configuração do `_headers`

Crie um arquivo `_headers` na pasta `public` para configurar cabeçalhos HTTP:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```
/service-worker.js
  Cache-Control: public, max-age=0, must-revalidate

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.png
  Cache-Control: public, max-age=31536000, immutable

/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
```

</div>

## 🐙 GitHub Pages

<div align="center">
  <img src="https://api.iconify.design/logos:github-icon.svg" width="140" alt="GitHub Pages" />
</div>

### Deploy no GitHub Pages

<div style="background: linear-gradient(135deg, rgba(36,41,46,0.02) 0%, rgba(36,41,46,0.05) 100%); padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0;">

GitHub Pages é uma excelente opção gratuita para hospedar sites estáticos diretamente dos seus repositórios GitHub. O processo é simples:

1. **Crie um repositório** no GitHub (ou use um existente)
2. **Configure seu projeto** para ser compatível com GitHub Pages
3. **Ative o GitHub Pages** nas configurações do repositório
4. O site será publicado em `https://seuusuario.github.io/nome-do-repo/`

</div>

### Configuração específica para Vite

Para projetos Vite como o BotZap, é necessário configurar a base URL corretamente:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```js
// vite.config.js
export default defineConfig({
  // ...outras configurações...
  base: '/nome-do-repo/', // Substitua pelo nome do seu repositório
})
```

</div>

### Usando GitHub Actions para deploy automático

Crie um arquivo `.github/workflows/deploy.yml`:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: dist
          clean: true
```

</div>

### Contornando o limite de arquivos

O GitHub Pages tem algumas limitações, especialmente para sites maiores:

<div style="margin: 1.5rem 0; padding: 1rem; background-color: #fff3cd; border-radius: 0.5rem; border-left: 3px solid #ffc107; font-size: 0.9rem;">
  <p style="margin: 0;">
    <strong>⚠️ Importante:</strong> GitHub Pages tem um limite recomendado de até 100MB por repositório e pode ter performance reduzida com muitos arquivos.
  </p>
</div>

Estratégias para contornar estas limitações:

1. **Use Git LFS (Large File Storage)** para arquivos grandes:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```bash
# Instalar Git LFS
git lfs install

# Configurar arquivos grandes para usar LFS
git lfs track "*.png" "*.jpg" "*.webp" "*.glb"

# Adicionar o arquivo de configuração do LFS
git add .gitattributes
git commit -m "Configurando Git LFS"
```

</div>

2. **Otimize imagens e assets** antes do deploy:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```js
// Adicione ao package.json
{
  "scripts": {
    "prebuild": "node scripts/optimize-images.js",
    "build": "vite build"
  }
}
```

</div>

3. **Externalize recursos grandes** usando CDNs:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```js
// Exemplo: ao invés de incluir modelos 3D pesados no repositório
const modelUrl = 'https://cdn.exemplo.com/modelos/bot-3d.glb';
```

</div>

4. **Use subpastas específicas** para modelos ou assets grandes:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```
.gitignore

# Ignore pastas com modelos 3D (hospede-os separadamente)
public/models/
```

</div>

5. **Divida seu projeto** em múltiplos repositórios:

- Repositório principal: Código, estrutura, UI, etc.
- Repositório de assets: Imagens, vídeos, modelos 3D, etc.
- Repositório de dados: JSON, configurações, etc.

### Configuração do Jekyll (opcional)

Por padrão, GitHub Pages usa Jekyll. Para desativá-lo (recomendado para projetos Vite/React), crie um arquivo `.nojekyll` vazio:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```yml
# Adicione este passo ao seu workflow
- name: Create .nojekyll file
  run: touch dist/.nojekyll
```

</div>

### Domínio personalizado com GitHub Pages

Para usar um domínio próprio:

1. Adicione um arquivo `CNAME` na raiz da pasta `dist`:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```
seudominio.com
```

</div>

2. Configure os registros DNS no seu provedor de domínio:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```
# Para domínio raiz (apex domain)
Tipo: A
Nome: @
Valor: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153

# Para subdomínio www
Tipo: CNAME
Nome: www
Valor: seuusuario.github.io
```

</div>

3. Ative HTTPS nas configurações do repositório (seção Pages) após configurar o domínio.

<div style="margin: 1.5rem 0; padding: 1rem; background-color: #d1e7dd; border-radius: 0.5rem; border-left: 3px solid #28a745; font-size: 0.9rem;">
  <p style="margin: 0;">
    <strong>✅ Dica:</strong> Adicione a criação do arquivo CNAME ao seu workflow de GitHub Actions para garantir que ele seja gerado automaticamente em cada deploy.
  </p>
</div>

## 🐳 Docker

<div align="center">
  <img src="https://api.iconify.design/logos:docker-icon.svg" width="100" alt="Docker" />
</div>

### Contêinerização com Docker

<div style="background: linear-gradient(135deg, rgba(43,108,176,0.02) 0%, rgba(43,108,176,0.05) 100%); padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0;">

Para ambientes onde você precisa de mais controle sobre o deploy, como servidores VPS ou plataformas como AWS ECS, você pode usar Docker:

</div>

### Dockerfile para produção

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```dockerfile
# Estágio de build
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Estágio de produção
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expor porta
EXPOSE 80

# Iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
```

</div>

### Configuração Nginx

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```nginx
server {
    listen       80;
    server_name  localhost;

    root   /usr/share/nginx/html;
    index  index.html;

    # Configuração para SPA
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache assets
    location /assets {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # Sem cache para service worker
    location /service-worker.js {
        expires -1;
        add_header Cache-Control "public, max-age=0, must-revalidate";
    }

    # Headers de segurança
    add_header X-Frame-Options "DENY";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";
}
```

</div>

### Docker Compose para desenvolvimento e produção

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```yaml
version: '3'

services:
  # Serviço de desenvolvimento
  dev:
    image: node:18-alpine
    container_name: botzap-dev
    working_dir: /app
    volumes:
      - .:/app
    ports:
      - "5173:5173"
    command: npm run dev -- --host
    environment:
      - NODE_ENV=development
      - VITE_API_URL=http://localhost:3000
  
  # Serviço de produção
  prod:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: botzap-prod
    ports:
      - "80:80"
    restart: unless-stopped
    environment:
      - VITE_API_URL=https://api.botzap.com
```

</div>

## 🌐 Configuração de Domínio

<div align="center">
  <img src="https://api.iconify.design/material-symbols:domain.svg" width="84" height="84" alt="Domínio" />
</div>

### Configuração de DNS

<div style="background: linear-gradient(135deg, rgba(51,51,51,0.05) 0%, rgba(51,51,51,0.1) 100%); padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0;">

Depois de escolher seu provedor de hospedagem, você precisará configurar seu domínio personalizado para apontar para o serviço. A configuração básica de DNS normalmente envolve:

</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
  <!-- Registros A -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/material-symbols:dns.svg" width="24" height="24" alt="DNS" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">Registro A/AAAA</h3>
    </div>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; font-size: 0.9rem;">
      <strong>Domínio raiz:</strong>
      <pre style="margin: 0.5rem 0; white-space: pre-wrap;">
Tipo: A
Nome: @
Valor: [Endereço IP fornecido]
TTL: 3600</pre>
    </div>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; margin-top: 0.5rem; font-size: 0.9rem;">
      <strong>Subdomínio www:</strong>
      <pre style="margin: 0.5rem 0; white-space: pre-wrap;">
Tipo: A
Nome: www
Valor: [Mesmo IP do registro raiz]
TTL: 3600</pre>
    </div>
  </div>
  
  <!-- Registros CNAME -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/material-symbols:alternate-email.svg" width="24" height="24" alt="CNAME" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">Registro CNAME</h3>
    </div>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; font-size: 0.9rem;">
      <strong>Alternativa comum:</strong>
      <pre style="margin: 0.5rem 0; white-space: pre-wrap;">
Tipo: CNAME
Nome: www
Valor: botzap-site.vercel.app
TTL: 3600</pre>
    </div>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; margin-top: 0.5rem; font-size: 0.9rem;">
      <strong>Subdomínios adicionais:</strong>
      <pre style="margin: 0.5rem 0; white-space: pre-wrap;">
Tipo: CNAME
Nome: app
Valor: botzap-site.vercel.app
TTL: 3600</pre>
    </div>
  </div>
  
  <!-- TXT e SSL -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/material-symbols:security.svg" width="24" height="24" alt="SSL" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">Verificação e SSL</h3>
    </div>
    <div style="background-color: #f6f8fa; padding: 0.75rem; border-radius: 0.5rem; font-size: 0.9rem;">
      <strong>Verificação de domínio:</strong>
      <pre style="margin: 0.5rem 0; white-space: pre-wrap;">
Tipo: TXT
Nome: @
Valor: [Código fornecido pela plataforma]
TTL: 3600</pre>
    </div>
    <div style="font-size: 0.9rem; margin-top: 0.75rem;">
      <strong>SSL:</strong> A maioria dos provedores ativará automaticamente SSL/TLS com Let's Encrypt após a verificação do domínio.
    </div>
  </div>
</div>

### Configurações Específicas por Plataforma

<div style="margin: 1.5rem 0;">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
    <!-- Vercel -->
    <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem;">
      <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
        <img src="https://api.iconify.design/logos:vercel-icon.svg" width="24" height="24" alt="Vercel" style="margin-right: 0.5rem;" />
        <h4 style="font-size: 1rem; margin: 0;">Vercel</h4>
      </div>
      <ol style="padding-left: 1.5rem; margin: 0; font-size: 0.9rem;">
        <li>Acesse <strong>Project Settings</strong></li>
        <li>Navegue até <strong>Domains</strong></li>
        <li>Adicione seu domínio personalizado</li>
        <li>Siga as instruções para configurar os registros DNS</li>
        <li>Selecione a opção <strong>Redirect www to root domain</strong> (recomendado)</li>
      </ol>
    </div>
    
    <!-- Netlify -->
    <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem;">
      <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
        <img src="https://api.iconify.design/logos:netlify-icon.svg" width="24" height="24" alt="Netlify" style="margin-right: 0.5rem;" />
        <h4 style="font-size: 1rem; margin: 0;">Netlify</h4>
      </div>
      <ol style="padding-left: 1.5rem; margin: 0; font-size: 0.9rem;">
        <li>Acesse <strong>Site settings</strong></li>
        <li>Clique em <strong>Domain management</strong></li>
        <li>Adicione seu domínio personalizado</li>
        <li>Selecione a opção <strong>HTTPS</strong> para ativar SSL</li>
        <li>Adicione redirecionamento www → não-www (ou vice-versa)</li>
      </ol>
    </div>
    
    <!-- Cloudflare -->
    <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem;">
      <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
        <img src="https://api.iconify.design/logos:cloudflare.svg" width="24" height="24" alt="Cloudflare" style="margin-right: 0.5rem;" />
        <h4 style="font-size: 1rem; margin: 0;">Cloudflare</h4>
      </div>
      <ol style="padding-left: 1.5rem; margin: 0; font-size: 0.9rem;">
        <li>Adicione seu site ao Cloudflare</li>
        <li>Configure os nameservers do seu registrador para os do Cloudflare</li>
        <li>Acesse <strong>Pages</strong> no Dashboard</li>
        <li>Em seu projeto, clique em <strong>Custom domains</strong></li>
        <li>Adicione seu domínio e configure de acordo com as instruções</li>
      </ol>
    </div>
  </div>
</div>

### Diagrama de Fluxo de DNS

<div style="text-align: center; background-color: #f8f9fa; padding: 1.5rem; border-radius: 0.5rem; margin: 1.5rem 0;">
```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│             │     │             │     │             │     │             │
│   Usuário   │────►│   Domínio   │────►│    CDN      │────►│   Servidor  │
│             │     │   DNS       │     │   Cache     │     │   Web       │
│             │     │             │     │             │     │             │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
                          ▲                                        │
                          │                                        │
                          └────────────────────────────────────────┘
                                      SSL/TLS
```
</div>

## 📊 Monitoramento

<div align="center">
  <img src="https://api.iconify.design/material-symbols:monitoring.svg" width="84" height="84" alt="Monitoramento" />
</div>

### Ferramentas de Monitoramento

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
  <!-- Analytics -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/logos:google-analytics.svg" width="24" height="24" alt="Analytics" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">Analytics</h3>
    </div>
    <ul style="padding-left: 1.5rem; margin: 0.5rem 0; font-size: 0.9rem;">
      <li>Google Analytics para métricas de usuário</li>
      <li>Posthog para análise comportamental</li>
      <li>Hotjar para heatmaps e gravações de sessão</li>
      <li>Plausible/Fathom para alternativas com foco em privacidade</li>
    </ul>
  </div>
  
  <!-- Performance -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/material-symbols:speed.svg" width="24" height="24" alt="Performance" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">Performance</h3>
    </div>
    <ul style="padding-left: 1.5rem; margin: 0.5rem 0; font-size: 0.9rem;">
      <li>Google Lighthouse para auditoria de desempenho</li>
      <li>WebPageTest para testes detalhados</li>
      <li>New Relic para monitoramento em tempo real</li>
      <li>Sentry para rastreamento de erros de frontend</li>
    </ul>
  </div>
  
  <!-- Uptime -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/material-symbols:check-circle.svg" width="24" height="24" alt="Uptime" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">Uptime</h3>
    </div>
    <ul style="padding-left: 1.5rem; margin: 0.5rem 0; font-size: 0.9rem;">
      <li>UptimeRobot para verificações básicas de disponibilidade</li>
      <li>Pingdom para monitoramento avançado</li>
      <li>StatusCake para alertas de tempo de inatividade</li>
      <li>Better Stack (Logtail) para monitoramento completo</li>
    </ul>
  </div>
</div>

### Implementação de Analytics

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```jsx
// src/lib/useAnalytics.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useAnalytics() {
  const location = useLocation();
  
  // Inicializa o analytics
  useEffect(() => {
    // Google Analytics
    if (window.gtag) {
      window.gtag('config', import.meta.env.VITE_ANALYTICS_ID, {
        page_path: location.pathname + location.search
      });
    }
    
    // Posthog (opcional)
    if (window.posthog) {
      window.posthog.capture('$pageview');
    }
  }, [location]);
  
  // Função para rastrear eventos
  const trackEvent = (eventName, properties = {}) => {
    // Google Analytics
    if (window.gtag) {
      window.gtag('event', eventName, properties);
    }
    
    // Posthog (opcional)
    if (window.posthog) {
      window.posthog.capture(eventName, properties);
    }
  };
  
  return { trackEvent };
}
```

</div>

### Monitoramento de Erros com Sentry

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```jsx
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as Sentry from '@sentry/react';

if (import.meta.env.PROD) {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [
      new Sentry.BrowserTracing({
        // Opções de configuração aqui
      }),
    ],
    tracesSampleRate: 0.2, // Ajuste conforme necessário
    environment: import.meta.env.MODE,
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

</div>

<div style="margin: 1.5rem 0; padding: 1rem; background-color: #d1e7dd; border-radius: 0.5rem; border-left: 3px solid #28a745; font-size: 0.9rem;">
  <p style="margin: 0;">
    <strong>✅ Dica de performance:</strong> Configure métricas de Web Vitals como LCP, FID e CLS para obter uma visão completa da experiência do usuário em produção.
  </p>
</div>

---

## ✅ Checklist Rápido de Deploy

| Etapa | Comando/Dica |
|-------|--------------|
| Instalar dependências | `npm install` |
| Build de produção | `npm run build` |
| Testar localmente | `npm run preview` |
| Configurar variáveis | `.env` ou painel da plataforma |
| Conferir Service Worker | Verifique HTTPS e cache |
| Deploy na plataforma | Vercel/Netlify/Cloudflare |
| Monitorar | Analytics, Sentry, Uptime |

> 💡 **Dica:** Sempre limpe o cache do navegador após deploys importantes!

---

## 🛠️ Troubleshooting Rápido

| Erro Comum | Solução |
|------------|---------|
| Página branca após deploy | Verifique rotas SPA e redirects (ex: Netlify `redirects`, Vercel `vercel.json`) |
| Service Worker não atualiza | Limpe cache, confira headers de cache e HTTPS |
| Variáveis de ambiente não lidas | Confirme nomes e se estão no painel da plataforma |
| Imagens não carregam | Verifique caminhos relativos e cache |
| HTTPS não funciona | Aguarde propagação do DNS/SSL ou force HTTPS na plataforma |

---

## 🚀 Dicas de SEO, PWA e Performance

- Use o [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) para auditar SEO, acessibilidade e performance.
- Preencha o `manifest.json` e use ícones otimizados para PWA.
- Ative o Service Worker e teste o modo offline.
- Adicione meta tags essenciais (`description`, `og:title`, `og:image`, etc).
- Comprima imagens e use formatos modernos (WebP, SVG).
- Prefira fontes locais ou Google Fonts otimizadas.
- Utilize headers de cache para assets estáticos.

---

## 🔗 Links Úteis

- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Netlify](https://docs.netlify.com/)
- [Documentação Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Guia Vite Deploy](https://vitejs.dev/guide/static-deploy.html)
- [Google Lighthouse](https://web.dev/measure/)
- [Ferramenta WebPageTest](https://www.webpagetest.org/)
- [Guia PWA Google](https://web.dev/progressive-web-apps/)

---

## 🔄 Integração Contínua e Deploy Contínuo (CI/CD)

<div align="center">
  <img src="https://api.iconify.design/material-symbols:deployed-code.svg" width="84" height="84" alt="CI/CD" />
</div>

### GitHub Actions para Deploy Automático

Crie um fluxo de trabalho GitHub Actions para automatizar o processo de build e deploy:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```yml
# .github/workflows/deploy.yml
name: Deploy BotZap

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Lint
        run: npm run lint
        
      - name: Test
        run: npm test
        
      - name: Build
        run: npm run build
        env:
          VITE_API_URL: ${{ secrets.VITE_API_URL }}
          VITE_ANALYTICS_ID: ${{ secrets.VITE_ANALYTICS_ID }}
          
      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build-files
          path: dist/

  deploy:
    needs: build-and-test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build-files
          path: dist/
          
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

</div>

### Fluxo de Trabalho para Preview Environments

Configure ambientes de preview para PRs:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```yml
# .github/workflows/preview.yml
name: Deploy Preview

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  deploy-preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        env:
          VITE_API_URL: ${{ secrets.PREVIEW_API_URL }}
          
      - name: Deploy Preview
        uses: amondnet/vercel-action@v20
        id: vercel-deploy
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          
      - name: Comment PR with Preview URL
        uses: actions/github-script@v6
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: `🚀 Deploy preview ready! ${process.env.VERCEL_PREVIEW_URL}`
            })
        env:
          VERCEL_PREVIEW_URL: ${{ steps.vercel-deploy.outputs.preview-url }}
```

</div>

## 🔍 Monitoramento Avançado em Produção

<div align="center">
  <img src="https://api.iconify.design/material-symbols:insights.svg" width="84" height="84" alt="Monitoramento Avançado" />
</div>

### Implementação do Logging Estruturado

Configure um logger estruturado para informações valiosas em produção:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```javascript
// src/lib/logger.js
import * as Sentry from '@sentry/browser';

const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
};

// Determina o ambiente
const isProd = import.meta.env.PROD;
const minLevel = isProd ? LOG_LEVELS.INFO : LOG_LEVELS.DEBUG;

class Logger {
  constructor(source) {
    this.source = source;
  }

  _log(level, message, data = {}) {
    if (level < minLevel) return;

    const logData = {
      timestamp: new Date().toISOString(),
      source: this.source,
      ...data,
    };

    // Console logging
    const consoleMethod = level === LOG_LEVELS.ERROR ? 'error' 
                        : level === LOG_LEVELS.WARN ? 'warn'
                        : level === LOG_LEVELS.INFO ? 'info'
                        : 'debug';
                        
    console[consoleMethod](message, logData);
    
    // Em produção, envie eventos importantes para o Sentry
    if (isProd && level >= LOG_LEVELS.WARN) {
      if (level === LOG_LEVELS.ERROR) {
        Sentry.captureException(new Error(message), { 
          extra: logData 
        });
      } else {
        Sentry.captureMessage(message, {
          level: level === LOG_LEVELS.WARN ? 'warning' : 'info',
          extra: logData
        });
      }
    }
  }

  debug(message, data) { this._log(LOG_LEVELS.DEBUG, message, data); }
  info(message, data) { this._log(LOG_LEVELS.INFO, message, data); }
  warn(message, data) { this._log(LOG_LEVELS.WARN, message, data); }
  error(message, data) { this._log(LOG_LEVELS.ERROR, message, data); }
}

export const createLogger = (source) => new Logger(source);
```

</div>

### Monitoramento de Web Vitals

Implemente rastreamento de métricas de performance essenciais:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```javascript
// src/lib/webVitals.js
import { onCLS, onFID, onLCP, onTTFB } from 'web-vitals';
import { createLogger } from './logger';

const logger = createLogger('web-vitals');

export function reportWebVitals(analyticsTracker) {
  // Core Web Vitals
  onCLS((metric) => {
    logger.info('CLS Score:', { score: metric.value });
    analyticsTracker('web_vital', {
      metric_name: 'cls',
      metric_value: metric.value,
      metric_rating: metric.rating,
    });
  });
  
  onLCP((metric) => {
    logger.info('LCP Score:', { score: metric.value });
    analyticsTracker('web_vital', {
      metric_name: 'lcp',
      metric_value: metric.value,
      metric_rating: metric.rating,
    });
  });
  
  onFID((metric) => {
    logger.info('FID Score:', { score: metric.value });
    analyticsTracker('web_vital', {
      metric_name: 'fid',
      metric_value: metric.value,
      metric_rating: metric.rating,
    });
  });
  
  // Additional Metrics
  onTTFB((metric) => {
    logger.info('TTFB Score:', { score: metric.value });
    analyticsTracker('web_vital', {
      metric_name: 'ttfb',
      metric_value: metric.value,
      metric_rating: metric.rating,
    });
  });
}
```

</div>

### Dashboard de Monitoramento com Grafana Cloud

Configure um dashboard de monitoramento completo em tempo real:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
  <!-- Configuração -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/logos:grafana.svg" width="24" height="24" alt="Grafana" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">Grafana + Prometheus</h3>
    </div>
    <ol style="padding-left: 1.5rem; margin: 0.5rem 0; font-size: 0.9rem;">
      <li>Crie uma conta no Grafana Cloud</li>
      <li>Configure o Prometheus como fonte de dados</li>
      <li>Utilize o OpenTelemetry para exportar métricas</li>
      <li>Integre com o Grafana Loki para logging centralizado</li>
      <li>Configure alertas para problemas críticos</li>
    </ol>
  </div>
  
  <!-- Métricas principais -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/material-symbols:speed.svg" width="24" height="24" alt="Métricas" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">Métricas Principais</h3>
    </div>
    <ul style="padding-left: 1.5rem; margin: 0.5rem 0; font-size: 0.9rem;">
      <li>Core Web Vitals (LCP, FID, CLS)</li>
      <li>Taxa de erro de JavaScript</li>
      <li>Tempo de carregamento por rota</li>
      <li>Saúde do Service Worker</li>
      <li>Latência de API</li>
      <li>Taxa de conversão por página</li>
    </ul>
  </div>
  
  <!-- Alertas -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/material-symbols:notifications-active.svg" width="24" height="24" alt="Alertas" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">Sistema de Alertas</h3>
    </div>
    <ul style="padding-left: 1.5rem; margin: 0.5rem 0; font-size: 0.9rem;">
      <li>Integrações com Slack/Discord/Telegram</li>
      <li>Alertas de erro rate acima de 0.5%</li>
      <li>Notificações para queda de desempenho</li>
      <li>Monitoramento de disponibilidade de APIs</li>
      <li>Escalado automático para turnos de pessoas responsáveis</li>
    </ul>
  </div>
</div>

## 🚀 Otimizações Avançadas para Produção

<div align="center">
  <img src="https://api.iconify.design/material-symbols:tune.svg" width="84" height="84" alt="Otimizações" />
</div>

### Divisão de Código Otimizada

Configure o splitting de código no Vite para carregamento eficiente:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```javascript
// vite.config.js
export default defineConfig({
  // ...existing code...
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui': ['@material-ui/core', '@material-ui/icons'],
          'charts': ['chart.js', 'react-chartjs-2'],
          'models': ['three', '@react-three/fiber'],
        },
        // Garante um hash consistente para melhor cache
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
```

</div>

### Otimização de Imagens com script automatizado

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```javascript
// scripts/optimize-images.js
import { globby } from 'globby';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminSvgo from 'imagemin-svgo';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs-extra';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDir = '../src/assets';
const publicDir = '../public';

async function optimizeImages() {
  console.log('🖼️ Otimizando imagens...');

  // Processa imagens na pasta src/assets
  const srcImages = await globby([
    `${srcDir}/**/*.{jpg,jpeg,png,svg}`,
  ]);

  // Processa imagens na pasta public
  const publicImages = await globby([
    `${publicDir}/**/*.{jpg,jpeg,png,svg}`,
    `!${publicDir}/icons/**`, // Ignora os ícones do PWA
  ]);

  const allImages = [...srcImages, ...publicImages];
  console.log(`Encontradas ${allImages.length} imagens para otimização`);

  for (const filepath of allImages) {
    const outputDir = filepath.includes('/src/') 
      ? filepath.split('/src/')[0] + '/src/' + filepath.split('/src/')[1].split('/').slice(0, -1).join('/')
      : filepath.split('/').slice(0, -1).join('/');

    // Otimiza para o formato original
    await imagemin([filepath], {
      destination: outputDir,
      plugins: [
        imageminMozjpeg({ quality: 80 }),
        imageminPngquant({ quality: [0.65, 0.8] }),
        imageminSvgo(),
      ],
    });

    // Também cria versões WebP (exceto para SVG)
    if (!filepath.endsWith('.svg')) {
      await imagemin([filepath], {
        destination: outputDir,
        plugins: [
          imageminWebp({ quality: 75 }),
        ],
      });
      console.log(`✓ Convertido para WebP: ${filepath}`);
    }
    
    console.log(`✓ Otimizado: ${filepath}`);
  }

  console.log('✅ Otimização de imagens concluída!');
}

optimizeImages().catch(console.error);
```

</div>

### Service Worker Avançado

Configure um service worker avançado com estratégias de cache otimizadas:

<div style="background-color: #f6f8fa; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9rem;">

```javascript
// src/service-worker.js
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute, NavigationRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate, NetworkFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

// Pré-cache de arquivos essenciais
precacheAndRoute(self.__WB_MANIFEST);

// Cache de fontes
registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com' || 
               url.origin === 'https://fonts.gstatic.com',
  new CacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365, // 1 ano
        maxEntries: 30,
      }),
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Cache de assets estáticos
registerRoute(
  ({ request }) => request.destination === 'script' || 
                  request.destination === 'style' ||
                  request.destination === 'image',
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 dias
      }),
    ],
  })
);

// Cache de API com Network First
registerRoute(
  ({ url }) => url.pathname.startsWith('/api/'),
  new NetworkFirst({
    cacheName: 'api-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 5 * 60, // 5 minutos
      }),
    ],
  })
);

// Rotas de navegação SPA
const handler = createHandlerBoundToURL('/index.html');
const navigationRoute = new NavigationRoute(handler, {
  // Não manipule rotas de API ou outros recursos estáticos
  denylist: [
    /^\/_/,
    /\/[^/?]+\.[^/]+$/,
  ],
});
registerRoute(navigationRoute);

// Página offline personalizada
const networkWithOfflineFallback = async (params) => {
  try {
    return await fetch(params.request);
  } catch (error) {
    return caches.match('/offline.html');
  }
};

registerRoute(
  ({ request }) => request.mode === 'navigate',
  networkWithOfflineFallback
);

// Gestão de eventos de mensagens
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
```

</div>

## 📋 Lista de Verificação Final para Deploy em Produção

<div style="background-color: #f0f8ff; padding: 1rem; border-radius: 0.5rem; margin: 1.5rem 0; border-left: 4px solid #007bff;">
<h3 style="margin-top: 0.5rem;">Checklist de Produção</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem;">
  <!-- Coluna 1: Performance -->
  <div>
    <h4>⚡ Performance</h4>
    <ul>
      <li>☐ Imagens otimizadas e em WebP</li>
      <li>☐ Code splitting configurado</li>
      <li>☐ Bundle JS minificado</li>
      <li>☐ CSS purificado</li>
      <li>☐ Fontes otimizadas</li>
      <li>☐ Web Vitals dentro dos padrões</li>
    </ul>
  </div>
  
  <!-- Coluna 2: Segurança -->
  <div>
    <h4>🔒 Segurança</h4>
    <ul>
      <li>☐ HTTPS habilitado</li>
      <li>☐ CSP configurado</li>
      <li>☐ Headers de segurança</li>
      <li>☐ SRI para recursos externos</li>
      <li>☐ Auditoria de dependências</li>
      <li>☐ XSS Protection ativado</li>
    </ul>
  </div>
  
  <!-- Coluna 3: SEO e Acessibilidade -->
  <div>
    <h4>🔍 SEO & Acessibilidade</h4>
    <ul>
      <li>☐ Meta tags preenchidas</li>
      <li>☐ Schema.org implementado</li>
      <li>☐ Sitemap.xml gerado</li>
      <li>☐ Robots.txt configurado</li>
      <li>☐ WCAG AA compliance</li>
      <li>☐ Alt text em imagens</li>
    </ul>
  </div>
  
  <!-- Coluna 4: Monitoramento -->
  <div>
    <h4>📊 Monitoramento</h4>
    <ul>
      <li>☐ Analytics configurado</li>
      <li>☐ Error tracking ativo</li>
      <li>☐ Logging estruturado</li>
      <li>☐ Alertas configurados</li>
      <li>☐ Monitoramento de uptime</li>
      <li>☐ Dashboard público de status</li>
    </ul>
  </div>
</div>
</div>

## 🔮 Tendências e Futuro

Para manter o BotZap atualizado com as últimas tendências de deployment, considere estas tecnologias em evolução:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
  <!-- Edge Functions -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/material-symbols:deployed-code-update.svg" width="24" height="24" alt="Edge Functions" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">Edge Functions</h3>
    </div>
    <p style="font-size: 0.9rem;">
      Funções de backend executadas no edge, próximas ao usuário. Oferecem menor latência e melhor experiência global. Implementáveis via Cloudflare Workers, Vercel Edge Functions ou Netlify Edge Functions.
    </p>
  </div>
  
  <!-- Partial Hydration -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/material-symbols:water-drop.svg" width="24" height="24" alt="Partial Hydration" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">Hidratação Parcial</h3>
    </div>
    <p style="font-size: 0.9rem;">
      Técnicas como Islands Architecture permitem hidratação seletiva de componentes, reduzindo significativamente o JavaScript enviado ao cliente. Frameworks como Astro e Qwik estão liderando esta tendência.
    </p>
  </div>
  
  <!-- Web Components -->
  <div style="border-radius: 0.5rem; padding: 1rem; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
      <img src="https://api.iconify.design/material-symbols:html.svg" width="24" height="24" alt="Web Components" style="margin-right: 0.5rem;" />
      <h3 style="font-size: 1.15rem; margin: 0;">Web Components Nativos</h3>
    </div>
    <p style="font-size: 0.9rem;">
      Componentes reutilizáveis baseados em standards da web. Para deployments futuros, considere migrar partes da UI para Web Components, permitindo melhor interoperabilidade e redução de dependências.
    </p>
  </div>
</div>

---

<div align="center">
  <p>
    <strong>BotZap - Guia de Deploy</strong><br>
    <sub>Atualizado em 12 de maio de 2025 | v2.4.0</sub>
  </p>
</div>

## 🔄 Considerações para Deploy com React 19

<div align="center">
  <img src="https://api.iconify.design/logos:react.svg" width="64" height="64" alt="React 19" />
</div>

<div style="background: linear-gradient(135deg, rgba(97,219,251,0.05) 0%, rgba(97,219,251,0.1) 100%); padding: 2rem; border-radius: 0.75rem; margin: 1.5rem 0;">

O BotZap utiliza o React 19, a versão mais recente do React (atualizado em maio de 2025). Esta seção fornece orientações específicas para garantir um deploy bem-sucedido com essa versão.

</div>

### Requisitos de Compatibilidade

Devido à atualização para o React 19, existem algumas considerações especiais para deploy:

1. **Ambiente de Node.js**: Recomenda-se Node.js 18.0.0 ou superior
2. **Gerenciamento de Dependências**: Utilize `--legacy-peer-deps` para resolver conflitos de dependência
3. **Service Workers**: Os service workers foram adaptados para compatibilidade com React 19
4. **Suporte a Navegadores**: React 19 tem suporte oficial para navegadores modernos (verifique a [matriz de compatibilidade](https://react.dev/reference/supported-browsers))

### Otimizações para o React 19

O React 19 introduz o React Compiler, que pode melhorar significativamente a performance. Para ativar o compilador no build de produção:

```bash
# Variável de ambiente para ativar o React Compiler
$env:REACT_COMPILER_ENABLED = 1

# Executar build com compilador ativado
npm run build
```

### Verificação de Compatibilidade

Antes de fazer o deploy final, execute as seguintes verificações:

1. **Verificação de Build**:
   ```bash
   npm run build
   npm run preview
   ```

2. **Verificação de Tipos**:
   ```bash
   npx tsc --noEmit
   ```

3. **Teste de Performance**:
   ```bash
   npm run build -- --report
   ```

### Troubleshooting Comum para React 19

| Problema | Possível Solução |
|----------|------------------|
| Erros de compatibilidade de bibliotecas | Utilize `--legacy-peer-deps` e atualize para versões compatíveis |
| Erros com tipagem TypeScript | Atualize `@types/react` e `@types/react-dom` para versões compatíveis com React 19 |
| Problemas de hydration | Verifique componentes que renderizam diferentemente no servidor e cliente |
| Erro com React Helmet | Substitua `react-helmet-async` por `react-helmet` |