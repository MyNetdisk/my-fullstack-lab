# 部署指南（GitHub Pages）

## 方式：GitHub Actions自动部署
1. 在仓库Settings → Pages
2. Source选择 `GitHub Actions`
3. 在仓库根目录新建`.github/workflows/deploy-docs.yml`

> workflow文件见仓库根目录README

打包产物：`docs/.vitepress/dist`
