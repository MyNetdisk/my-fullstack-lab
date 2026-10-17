// docs/.vitepress/vite-env.d.ts
/// <reference types="vitepress/client" />
declare module '*.css' {
  const content: string
  export default content
}
