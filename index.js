function MailchimpRenderer (marked, opts = {}) {
  let defaults = {
    spacesPerIndent: 4,
    pixelsPerIndent: 20
  }
  Object.assign(defaults, opts)
  
  let renderer = new marked.Renderer()

  renderer.code = function (code, lang, escaped) {
    let spacesPerIndent = 4
    let pixesPerIndent = 20

    if (this.defaults.highlight) {
      code = this.defaults.highlight(code, lang)
    }

    let lines = code.split('\n')
    lines = lines.map(line => {
      let spaces = line.match(/^ */)[0].length
      let tabs = line.match(/^\t*/)[0].length
      return {
        indentLevel: tabs + spaces / spacesPerIndent,
        content: line
      }
    })

    lines = lines.map(line => `<span style="margin-left:${line.indentLevel*pixesPerIndent}px">${line.content}</span>`)

    return `<code class="language-${lang}">${lines.join('<br>')}</code>`
  }.bind(marked)

  return renderer
}

module.exports = MailchimpRenderer
