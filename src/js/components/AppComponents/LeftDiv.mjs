import Element from '../../Element.mjs'
import Iframe from './Iframe.mjs'

const LeftDiv = new Element({
    attributes: {
        class: 'left',
    },
})

LeftDiv.append(Iframe)

export default LeftDiv
