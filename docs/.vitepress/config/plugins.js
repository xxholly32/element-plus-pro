import path from 'path'
import fs from 'fs-extra'
import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'

const localMd = MarkdownIt()
const projRoot = path.resolve(__dirname, '..', '..', '..')
const docRoot = path.resolve(projRoot, 'docs')

export const mdPlugin = (md) => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = (m && m.length > 1) ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''

        if (sourceFileToken.type === 'inline') {
          const examplesPath = path.resolve(docRoot, 'examples', `${sourceFile}.vue`)
          const isInExamples = fs.statSync(examplesPath, { throwIfNoEntry: false })

          source = fs.readFileSync(
            path.resolve(docRoot, isInExamples ? 'examples' : 'custom-examples', `${sourceFile}.vue`),
            'utf-8',
          )
        }
        if (!source)
          throw new Error(`Incorrect source file: ${sourceFile}`)

        return `<Demo source="${encodeURIComponent(
          source,
        )}" path="${sourceFile}" raw-source="${encodeURIComponent(
          source,
        )}" description="${encodeURIComponent(localMd.render(description))}">`
      }
      else {
        return '</Demo>'
      }
    },
  })
}
