import Element from '../../Element.mjs'
import LeftDiv from './LeftDiv.mjs'
import RightDiv from './RightDiv.mjs'
import { CodePad } from './CodePad.mjs'
import Dragger from './Dragger.mjs'

const filter = (children, targetClasses) => {
    const filteredItems = []
    for (const child of children) {
        for (const cls of child.$el.classList) {
            if (targetClasses.includes(cls)) {
                filteredItems.push(child)
                break
            }
        }
    }
    return filteredItems
}

const targets = ['html', 'css', 'js', 'output']
const [htmlPad, cssPad, jsPad] = filter(RightDiv.children, targets)
const [outputElement] = filter(LeftDiv.children, targets)

window.addEventListener('popstate', () => {
    if (location.pathname.includes('/app')) {
        new CodePad({
            outputElement,
            htmlPad,
            cssPad,
            jsPad,
        })
        return
    }
})

document.addEventListener('click', (e) => {
    if ('link' in e.target.dataset) {
        if (e.target.href.includes('/app')) {
            new CodePad({
                outputElement,
                htmlPad,
                cssPad,
                jsPad,
            })
            return
        }
    }
})

const ContainerDiv = new Element({
    attributes: { class: 'container' },
})

ContainerDiv.appendMany([LeftDiv, Dragger, RightDiv])

export default ContainerDiv
