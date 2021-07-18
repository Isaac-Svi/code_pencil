import Element from '../../Element.mjs'
import { pathToRegex } from '../../utils/Regex.mjs'

const HtmlTop = new Element({
    attributes: {
        class: 'h-top',
    },
})

const H4 = new Element({
    tag: 'h4',
    innerHTML: '<i class="fas fa-pencil-ruler"></i> HTML ',
})

const CollapseButton = new Element({
    tag: 'button',
    innerHTML: '<i class="fas fa-chevron-down" title="Collapse HTML"></i>',
})

let collapsed = false

CollapseButton.addEventListener('click', (e) => {
    collapsed = !collapsed

    HTML.$el.style.flex = collapsed ? 0 : 1
    HTML.$el.style.padding = (collapsed ? 0 : 20) + 'px'
    e.target.style.transform = collapsed ? 'rotate(180deg)' : 'rotate(0deg)'
})

H4.append(CollapseButton)
HtmlTop.append(H4)

const HTML = new Element({
    tag: 'textarea',
    attributes: {
        class: 'html',
    },
})

window.addEventListener('popstate', () => {
    if (location.pathname.includes('/app')) {
        let id = location.pathname.split('/')
        id = id[id.length - 1]

        const projects = JSON.parse(localStorage.getItem('projects'))

        HTML.$el.innerText = projects[id].html
    }
})

document.addEventListener('click', (e) => {
    if ('link' in e.target.dataset) {
        if (e.target.href.includes('/app')) {
            setTimeout(() => {
                let id = location.pathname.split('/')
                id = id[id.length - 1]

                const projects = JSON.parse(localStorage.getItem('projects'))

                HTML.$el.innerText = projects[id].html
            }, 200)
        }
    }
})

export { HtmlTop, HTML }
