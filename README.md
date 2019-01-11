This module provides a custom renderer for [marked](https://www.npmjs.com/package/marked) which fixes a bug in how Mailchimp renders code snippets.

Mailchimp seems to auto-indent raw html, which messes up the spacing in `<pre>` elements.

This module hacks around this bug by inserting `<span>` elements in front of whitespace which have a left margin.

Usage:

```
let marked = require('marked')
let { highlightAuto } = require('highlight.js');
let MailchimpRenderer = require('marked-mailchimp')

function highlight(code) {
  return highlightAuto(code).value;
}

let opts = {
  spacesPerIndent: 4,
  pixelsPerIndent: 20
}

marked.setOptions({
  renderer: MailchimpRenderer(marked, opts),
  highlight: highlight
})
```

`spacesPerIndent` defaults to 4
`pixesPerIndent` defaults to 20
