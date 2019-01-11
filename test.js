let marked = require('marked')
let { highlightAuto } = require('highlight.js');
let MailchimpRenderer = require('./index.js')

function highlight(code, lang) {
  return highlightAuto(code, lang.length ? [lang] : null).value;
}

marked.setOptions({
  renderer: MailchimpRenderer(marked),
  highlight: highlight
})


let test = marked('blah blah\n```java\npublic void raiseToast(String message) {\n    Toast.makeText(this, message, Toast.LENGTH_LONG).show();\n}\n```\nblah blah')
console.log(test)
console.log('\n\n')
console.log(highlightAuto('public void raiseToast(String message) {\n    Toast.makeText(this, message, Toast.LENGTH_LONG).show();\n}', null))
