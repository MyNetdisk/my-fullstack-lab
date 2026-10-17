import{_ as s,o as n,c as e,a2 as p}from"./chunks/framework.Cn5Czt-D.js";const _=JSON.parse('{"title":"仓库结构","description":"","frontmatter":{},"headers":[],"relativePath":"guide/repo-structure.md","filePath":"guide/repo-structure.md","lastUpdated":null}'),t={name:"guide/repo-structure.md"};function l(i,a,o,r,c,d){return n(),e("div",null,[...a[0]||(a[0]=[p(`<h1 id="仓库结构" tabindex="-1">仓库结构 <a class="header-anchor" href="#仓库结构" aria-label="Permalink to &quot;仓库结构&quot;">​</a></h1><blockquote><p>非monorepo架构，每个Demo独立文件夹，各自管理package.json/依赖。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>my-fullstack-lab</span></span>
<span class="line"><span>├── docs/                # VitePress 文档站（当前目录）</span></span>
<span class="line"><span>├── backend/</span></span>
<span class="line"><span>│   ├── express-jwt-api/ # Express jwt 登录接口 demo</span></span>
<span class="line"><span>│   └── nest-rbac/       # NestJS 权限后端</span></span>
<span class="line"><span>├── python/</span></span>
<span class="line"><span>│   ├── fastapi-rag/     # FastAPI 后端</span></span>
<span class="line"><span>│   └── py-scripts/      # 小脚本工具</span></span>
<span class="line"><span>├── frontend/</span></span>
<span class="line"><span>│   └── vue-frontend/    # Vue 前端项目</span></span>
<span class="line"><span>├── README.md            # 仓库根 README</span></span>
<span class="line"><span>└── .gitignore</span></span></code></pre></div><h3 id="规则" tabindex="-1">规则 <a class="header-anchor" href="#规则" aria-label="Permalink to &quot;规则&quot;">​</a></h3><ol><li>每个子项目独立，单独初始化，互不干扰</li><li>所有项目说明，统一写在docs里</li><li>提交规范：feat / fix / docs</li></ol>`,5)])])}const h=s(t,[["render",l]]);export{_ as __pageData,h as default};
