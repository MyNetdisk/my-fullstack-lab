# 01-express-jwt-api
> Express + TypeScript + JWT REST API Demo

## 功能
1. 用户注册、登录，签发JWT token
2. 登录态校验中间件，保护私有接口
3. 简单用户信息查询接口

## 环境变量
复制 `.env.example` 新建 `.env`，填入配置
```bash
PORT=3000
JWT_SECRET=change_me_to_your_secret
```

## 本地启动
```bash
pnpm install
pnpm run dev
```