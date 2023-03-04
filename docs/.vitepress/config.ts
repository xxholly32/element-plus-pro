import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins.js'

export default defineConfig({
  base: '/element-plus-pro/',
  ignoreDeadLinks: true,
  title: 'Element Plus Pro',
  description: 'a Vue 3 based component library for designers and developers',
  lastUpdated: true,
  themeConfig: {
    nav: nav(),
    sidebar: {
      '/components': sidebarComponents(),
      '/custom': sidebarCustom(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xxholly32/element-plus-pro' },
    ],
  },
  markdown: {
    config: md => mdPlugin(md),
  },
})
function nav() {
  return [
    { text: '组件', link: '/components/button', activeMatch: '/components/' },
    { text: '定制组件', link: '/custom/time-select', activeMatch: '/custom/' },
  ]
}
// TODO: 根据配置文件生成侧边栏
function sidebarComponents() {
  return [
    {
      text: '基础',
      items: [
        { text: 'Button', link: '/components/button' },
      ],
    },
    {
      text: '表单',
      items: [
        { text: 'Input', link: '/components/input' },
        { text: 'Checkbox', link: '/components/checkbox' },
        { text: 'Form', link: '/components/form' },
        { text: 'Select', link: '/components/select' },
      ],
    },
    {
      text: '其他',
      items: [
        { text: 'Dialog', link: '/components/dialog' },
        { text: 'Message', link: '/components/message' },
      ],
    },
    {
      text: '数据展示',
      items: [
        { text: 'Tree', link: '/components/tree' },
      ],
    },
  ]
}

function sidebarCustom() {
  return [
    {
      text: '定制组件',
      items: [
        { text: 'time-select', link: '/custom/time-select' },
      ],
    },
  ]
}
