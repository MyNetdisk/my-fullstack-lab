# 快速开始

## 环境要求
- Node.js >= 18
- pnpm >= 8

## 本地启动文档站
```bash
# 进入docs目录
cd docs

# 安装依赖
pnpm install

# 启动开发服务
pnpm run dev
# 访问地址： http://localhost:5173/my-fullstack-lab/

## 打包生产

```bash
pnpm run build
# 产物输出到 .vitepress/dist
pnpm run preview
```