import path, { dirname, resolve } from 'node:path'
import { appendFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'node:url'
import { emptyDir, ensureDir, ensureFile } from 'fs-extra'
import camelcase from 'camelcase'
import axios from 'axios'
import config from './config.json' assert { type: 'json' }

const dir = dirname(fileURLToPath(import.meta.url))
const pathRoot = resolve(dir, '..')
const entryPath = resolve(pathRoot, 'examples/index.js')
const mdPath = resolve(pathRoot, 'components/')

function generateEntry(component, demo) {
  const componentName = camelcase(`${component}-${demo}`, { pascalCase: true })
  const code = `export { default as ${componentName} } from './${component}/${demo}.vue'\n`
  appendFileSync(entryPath, code, 'utf-8')
}

async function generateMd(component) {
  const { data } = await axios.get(`https://raw.githubusercontent.com/element-plus/element-plus/dev/docs/en-US/component/${component}.md`)
  writeFileSync(path.resolve(mdPath, `${component}.md`), data)
}

function generateComponentsExamplesAndMd() {
  Object.entries(config).map(async ([component, demos]) => {
    const filePath = resolve(pathRoot, `examples/${component}`)
    await ensureDir(filePath)
    await emptyDir(filePath)
    demos.map(async (demo) => {
      const { data } = await axios.get(`http://raw.githubusercontent.com/element-plus/element-plus/dev/docs/examples/${component}/${demo}.vue`)
      generateEntry(component, demo)
      writeFileSync(path.resolve(filePath, `${demo}.vue`), data, 'utf-8')
    })
    await generateMd(component)
  })
}

try {
  // TODO：自己新建md文档或者demos时候, 会清空文件夹, 这里逻辑要修改
  console.log('生成 examples 入口文件')
  await emptyDir(resolve(pathRoot, 'examples'))
  await ensureFile(entryPath)

  console.log('生成 examples 以及 md 文档')
  await ensureDir(mdPath)
  await emptyDir(mdPath)
  generateComponentsExamplesAndMd()
}
catch (error) {
  console.log('出现错误', error)
}
