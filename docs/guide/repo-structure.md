# 仓库结构

> 非monorepo架构，每个Demo独立文件夹，各自管理package.json/依赖。

```
my-fullstack-lab
├── docs/                # VitePress 文档站（当前目录）
├── backend/
│   ├── express-jwt-api/ # Express jwt 登录接口 demo
│   └── nest-rbac/       # NestJS 权限后端
├── python/
│   ├── fastapi-rag/     # FastAPI 后端
│   └── py-scripts/      # 小脚本工具
├── frontend/
│   └── vue-frontend/    # Vue 前端项目
├── README.md            # 仓库根 README
└── .gitignore

```

### 规则
1. 每个子项目独立，单独初始化，互不干扰
2. 所有项目说明，统一写在docs里
3. 提交规范：feat / fix / docs
