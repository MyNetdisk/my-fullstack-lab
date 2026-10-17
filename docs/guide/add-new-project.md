# 新增项目规范

新增Demo步骤：
1. 在对应分类文件夹新建目录（backend / python / frontend）
2. 进入目录，初始化项目（pnpm/npm/pip）
3. 在`docs/projects/`新建md文档，介绍项目
4. 在 `.vitepress/config.ts` 的nav+sidebar添加页面路由
5. 本地启动docs验证链接正常
6. git提交代码+文档

> 示例：新增nest-websocket项目
> 新建 `backend/nest-websocket`
> 新建 `docs/projects/nest-websocket.md`
> 修改config.ts配置导航
