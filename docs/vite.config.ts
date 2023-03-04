import path from 'path'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { prismjsPlugin } from 'vite-plugin-prismjs'
import VueMacros from 'unplugin-vue-macros'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, './')}/`,
      '@@/': `${path.resolve(__dirname, '../packages')}/`,
      '~/': `${path.resolve(__dirname, './.vitepress')}/`,
      '@element-plus/utils': `${path.resolve(__dirname, '../packages/utils')}/`,
      '@element-plus/components': `${path.resolve(__dirname, './node_modules/element-plus')}/`,
      '@element-plus/constants': `${path.resolve(__dirname, './node_modules/element-plus')}/`,
      '@element-plus/hooks': `${path.resolve(__dirname, './node_modules/element-plus')}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@@/theme-reset/element/index.scss" as *;',
      },
    },
  },
  plugins: [
    UnoCSS(),
    prismjsPlugin({
      // 添加支持的高亮的语言, 如果需要支持全部的话改成这样:  languages: "all"
      languages: 'all',
      plugins: ['toolbar', 'copy-to-clipboard'],
      theme: 'coy',
      css: true,
    }),

    // https://vue-macros.sxzz.moe/guide/getting-started.html
    VueMacros.vite(),
  ],
})
