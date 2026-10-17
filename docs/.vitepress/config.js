import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'my-fullstack-lab',
  description: '全栈学习实验室 | Node / NestJS / Python / Vue 学习Demo集合',
  base: '/my-fullstack-lab/', // GitHub Pages子路径，不要改！
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'my-fullstack-lab',

    nav: [
      { text: '首页', link: '/' },
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/guide/quick-start' },
          { text: '仓库结构', link: '/guide/repo-structure' },
          { text: '新增项目规范', link: '/guide/add-new-project' },
          { text: '部署指南', link: '/guide/deploy' }
        ]
      },
      {
        text: '项目',
        items: [
          { text: '项目总览', link: '/projects/index' },
          { text: 'express-jwt-api', link: '/projects/express-jwt-api' },
          { text: 'nest-rbac', link: '/projects/nest-rbac' },
          { text: 'fastapi-rag', link: '/projects/fastapi-rag' },
          { text: 'py-scripts', link: '/projects/py-scripts' },
          { text: 'vue-frontend', link: '/projects/vue-frontend' }
        ]
      },
      {
        text: 'GitHub',
        link: 'https://github.com/your-name/my-fullstack-lab'
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开发指南',
          items: [
            { text: '快速开始', link: '/guide/quick-start' },
            { text: '仓库结构', link: '/guide/repo-structure' },
            { text: '新增项目规范', link: '/guide/add-new-project' },
            { text: '部署指南', link: '/guide/deploy' }
          ]
        }
      ],
      '/projects/': [
        {
          text: 'Demo项目列表',
          items: [
            { text: '项目总览', link: '/projects/index' },
            { text: 'express-jwt-api', link: '/projects/express-jwt-api' },
            { text: 'nest-rbac', link: '/projects/nest-rbac' },
            { text: 'fastapi-rag', link: '/projects/fastapi-rag' },
            { text: 'py-scripts', link: '/projects/py-scripts' },
            { text: 'vue-frontend', link: '/projects/vue-frontend' }
          ]
        }
      ]
    },

    outline: { level: [2, 3] },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    editLink: {
      pattern: 'https://github.com/your-name/my-fullstack-lab/edit/main/docs/:path',
      text: '在GitHub编辑此页'
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-name/my-fullstack-lab' }
    ],
    footer: {
      copyright: 'MIT License © 2026 my-fullstack-lab'
    }
  }
})
