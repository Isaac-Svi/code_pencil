import Element from '../../Element.mjs'
import { HtmlTop, HTML } from './HTMLSection.mjs'
import { CssTop, CSS } from './CSSSection.mjs'
import { JsTop, JS } from './JSSection.mjs'
const RightDiv = new Element({
    attributes: {
        class: 'right',
    },
})

RightDiv.appendMany([HtmlTop, HTML, CssTop, CSS, JsTop, JS])

export default RightDiv
