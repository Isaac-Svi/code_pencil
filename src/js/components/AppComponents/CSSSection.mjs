import Element from '../../Element.mjs'

const CssTop = new Element({
    attributes: {
        class: 'c-top',
        title: 'double click to collapse',
    },
})

const H4 = new Element({
    tag: 'h4',
    innerHTML: '<i class="fas fa-pencil-ruler"></i> CSS ',
})

const CollapseButton = new Element({
    tag: 'button',
    innerHTML: '<i class="fas fa-chevron-down" title="Collapse CSS"></i>',
})

let collapsed = false

CollapseButton.addEventListener('click', (e) => {
    collapsed = !collapsed

    CSS.$el.style.flex = collapsed ? 0 : 1
    CSS.$el.style.padding = (collapsed ? 0 : 20) + 'px'
    e.target.style.transform = collapsed ? 'rotate(180deg)' : 'rotate(0deg)'
})

H4.append(CollapseButton)
CssTop.append(H4)

const CSS = new Element({
    tag: 'textarea',
    attributes: {
        class: 'css',
    },
})

window.addEventListener('popstate', () => {
    if (location.pathname.includes('/app')) {
        let id = location.pathname.split('/')
        id = id[id.length - 1]

        const projects = JSON.parse(localStorage.getItem('projects'))

        CSS.$el.innerText = projects[id].css
    }
})

document.addEventListener('click', (e) => {
    if ('link' in e.target.dataset) {
        if (e.target.href.includes('/app')) {
            setTimeout(() => {
                let id = location.pathname.split('/')
                id = id[id.length - 1]

                const projects = JSON.parse(localStorage.getItem('projects'))

                CSS.$el.innerText = projects[id].css
            }, 200)
        }
    }
})

export { CssTop, CSS }
