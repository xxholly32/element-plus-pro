import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type { App } from 'vue'
import HTimeSelect from '@@/element-plus-pro/components/time-select'
import * as ElementPlusDemos from '@/examples/index.js'
// @ts-expect-error
import Demo from '~/components/demo.vue'
import 'uno.css'
import '~/styles/code.scss'
import '@@/theme-reset/index.scss'

import * as CustomDemos from '@/custom-examples/index.js'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    // 注册ElementPlus
    app.use(ElementPlus, {
      locale, // 语言设置
    })

    app.component('Demo', Demo)
    app.use(HTimeSelect)
    // 注册所有图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue))
      app.component(key, component)

    // 注册所有 element-plus 用到的组件
    for (const [key, component] of Object.entries(ElementPlusDemos))
      app.component(key, component)

    // 注册定制组件
    for (const [key, component] of Object.entries(CustomDemos))
      app.component(key, component)
  },
}
