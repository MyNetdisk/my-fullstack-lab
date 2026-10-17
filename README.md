# my-fullstack-lab
💻 Fullstack Learning Lab | 全栈学习实验室
> 本仓库用于存放个人学习过程中编写的全栈Demo项目，包含 Node.js、NestJS、Python FastAPI、Vue3、UniApp。
> 适合用来练习后端接口、数据库、鉴权、前后端联调；同时作为作品集，在线文档用于对外展示项目。
> ⚠️ 所有项目仅用于学习练习，**禁止直接用于生产环境**；所有密钥、数据库密码不会提交到仓库，仅保留`.env.example`模板。

## 📖 在线文档站点（GitHub Pages）
https://<你的github账号>.github.io/my-fullstack-lab/

## 📂 仓库组成 & 目录说明
```
my-fullstack-lab/
├── README.md                     # 仓库总说明文档
├── .gitignore                    # git忽略配置
├── package.json                  # 根目录脚本（可选，用于docs部署）
├── docs/                         # VitePress文档站，打包部署GitHub Pages
│   ├── index.md                  # 文档首页
│   ├── .vitepress/
│   │   └── config.js             # VitePress配置、侧边栏导航
│   └── projects/                 # 各个子项目文档
│       ├── express-jwt-api.md
│       └── nest-rbac-backend.md
├── node-side/                    # Node后端项目目录
│   └── 01-express-jwt-api/       # 示例：Express JWT登录接口项目
│       ├── README.md             # 子项目独立说明
│       ├── .env.example          # 环境变量模板，不存放真实密钥
│       ├── .gitignore
│       ├── package.json
│       └── src/
│           ├── index.ts
│           ├── controller/
│           ├── service/
│           └── middleware/
├── python-side/                  # Python & FastAPI项目
│   └── 01-py-scripts/            # Python脚本合集
│       ├── README.md
│       └── src/
└── web-frontend-samples/         # 和后端配套的前端Demo
    └── 01-vue-demo-frontend/
        ├── README.md
        ├── package.json
        └── src/
```

### 目录职责说明
1. **docs/**
VitePress静态文档站。写项目介绍、接口文档、截图、演示链接。打包后发布到GitHub Pages，作为作品集展示网页。**这里不存放业务源码，只存放文档。**

2. **node-side/**
存放Node.js后端项目，Express、NestJS等，每个子项目独立文件夹，可单独启动。
每个子项目自带：独立README、`.env.example`、源码。

3. **python-side/**
Python脚本、FastAPI接口项目。脚本工具、RAG、数据处理Demo放这里。

4. **web-frontend-samples/**
存放和后端配套的前端页面（Vue3、UniApp H5），打包dist后可部署GitHub Pages作为演示页面。

## 🚀 本地启动规则
> 本仓库是**多项目集合仓库**，**没有统一的全局启动命令**。
> 需要进入对应子项目目录，单独安装依赖并启动。

示例：启动 express-jwt-api
```bash
cd node-side/01-express-jwt-api
pnpm install
pnpm run dev
```

示例：启动配套 Vue 前端

```
cd web-frontend-samples/01-vue-demo-frontend
pnpm install
pnpm run dev
```

示例：本地预览文档站点

```
cd docs
pnpm install
pnpm run dev
```

## 📤 部署说明

### 1. 文档网站部署（VitePress → GitHub Pages）

```
cd docs
pnpm run build
pnpm run deploy
```

生成静态页面，发布到 github pages，访问：`https://<你的github账号>.github.io/my-fullstack-lab/`

### 2. 后端服务部署（Express / Nest / FastAPI）

后端无法部署到 GitHub Pages，推荐使用 Render / Railway 免费平台：

1. 将子项目部署，拿到公网 API 地址
2. 将 API 地址填写到子项目 README 和 docs 文档中

> 
> 提示：免费实例会休眠，访问第一次会慢。

### 3. 前端 Demo 部署（Vue / UniApp H5）

进入前端项目打包：

```
pnpm run build
```

- 方案 A：产物放入 docs 目录，随 VitePress 一起发布
- 方案 B：使用 gh-pages 单独部署 dist 文件夹，获得独立预览地址

## 📝 新增项目规范

1. 根据项目类型放入对应目录（node-side /python-side/web-frontend-samples）
2. 新建子项目文件夹，命名格式：`序号-技术栈-项目名`，例如：`02-nest-rbac-api`
3. 子项目内必须包含：独立 README、`.env.example`
4. 更新根 README.md，追加项目简介
5. 在`docs/projects/`新建对应文档，更新 VitePress 侧边栏
6. git 提交规范：`feat: add xxx project` / `docs: update readme`

## 📜 License

MIT
