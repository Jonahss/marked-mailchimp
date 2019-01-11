let marked = require('marked')
let { highlightAuto } = require('highlight.js');
let MailchimpRenderer = require('./index.js')

function highlight(code) {
  return highlightAuto(code).value;
}

marked.setOptions({
  renderer: MailchimpRenderer(marked),
  highlight: highlight
})


let test = marked('blah blah\n```java\npublic void raiseToast(String message) {\n    Toast.makeText(this, message, Toast.LENGTH_LONG).show();\n}\n```\nblah blah')
console.log(test)
