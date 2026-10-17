// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
// @ts-ignore 忽略css类型检查（快速方案，适合文档站）
import './custom.css'

export default {
  ...DefaultTheme,
  // @ts-ignore
  enhanceApp({ app }) {
  }
}
