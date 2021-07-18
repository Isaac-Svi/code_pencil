import Element from '../../Element.mjs'

const JsTop = new Element({
    attributes: {
        class: 'j-top',
    },
})

const H4 = new Element({
    tag: 'h4',
    innerHTML: '<i class="fas fa-pencil-ruler"></i> JS ',
})

const CollapseButton = new Element({
    tag: 'button',
    innerHTML: '<i class="fas fa-chevron-down" title="Collapse JS"></i>',
})

let collapsed = false

CollapseButton.addEventListener('click', (e) => {
    collapsed = !collapsed

    JS.$el.style.flex = collapsed ? 0 : 1
    JS.$el.style.padding = (collapsed ? 0 : 20) + 'px'

    e.target.style.transform = collapsed ? 'rotate(180deg)' : 'rotate(0deg)'
})

H4.append(CollapseButton)
JsTop.append(H4)

const JS = new Element({
    tag: 'textarea',
    attributes: {
        class: 'js',
    },
})

window.addEventListener('popstate', () => {
    if (location.pathname.includes('/app')) {
        let id = location.pathname.split('/')
        id = id[id.length - 1]

        const projects = JSON.parse(localStorage.getItem('projects'))

        JS.$el.innerText = projects[id].js
    }
})

document.addEventListener('click', (e) => {
    if ('link' in e.target.dataset) {
        if (e.target.href.includes('/app')) {
            setTimeout(() => {
                let id = location.pathname.split('/')
                id = id[id.length - 1]

                const projects = JSON.parse(localStorage.getItem('projects'))

                JS.$el.innerText = projects[id].js
            }, 200)
        }
    }
})

export { JsTop, JS }
