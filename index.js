let marked = require('marked')
let { highlightAuto } = require('highlight.js');
function highlight(code) {
  return highlightAuto(code).value;
}

let renderer = new marked.Renderer()

renderer.code = (code, lang, escaped) => {
  let spacesPerIndent = 4
  let pixesPerIndent = 20

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
}

marked.setOptions({
  renderer,
  highlight
})


let test = marked('blah blah\n```java\npublic void raiseToast(String message) {\n    Toast.makeText(this, message, Toast.LENGTH_LONG).show();\n}\n```\nblah blah')
console.log(test)
