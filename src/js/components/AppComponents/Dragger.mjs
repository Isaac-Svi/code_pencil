import Element from '../../Element.mjs'
import RightDiv from './RightDiv.mjs'
import LeftDiv from './LeftDiv.mjs'

const Dragger = new Element({
    attributes: {
        class: 'dragger',
    },
})

const setWidth = (newWidth) => {
    RightDiv.$el.style.setProperty('--width', newWidth)
}

let isMouseDown = false

const Overlay = new Element({ attributes: { class: 'overlay behind' } })
LeftDiv.append(Overlay)

const handleMouseDown = () => {
    isMouseDown = true

    Overlay.$el.classList.remove('behind')
}
const handleMouseUp = () => {
    isMouseDown = false
    Overlay.$el.classList.add('behind')
}

const handleMouseMove = (e) => {
    if (!isMouseDown) return

    const newWidth = window.innerWidth - e.clientX + 'px'
    setWidth(newWidth)
}

Dragger.addEventListener('mousedown', handleMouseDown)
window.addEventListener('mouseup', handleMouseUp)
window.addEventListener('mousemove', handleMouseMove)

export default Dragger
