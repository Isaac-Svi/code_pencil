import Project from '../Project.mjs'
import Element from '../../Element.mjs'

class NavBar extends Element {
    constructor(args) {
        super({
            attributes: { class: 'nav' },
            innerHTML: `
        <div class="ul-con">
            <ul>
                <li><a href="/" data-link>Home</a></li>
            </ul>
        </div>
        <div><h1>CODE <i class="fas fa-pencil-alt"></i></h1></div>
        `,
            ...args,
        })

        this.popup = new Element({
            attributes: {
                id: 'pop',
            },
        })
        this.settingsButton = new Element({
            tag: 'button',
            innerHTML: 'Settings',
        })
        this.saveButton = new Element({
            tag: 'button',
            innerHTML: 'Save',
            attributes: {
                class: 'save',
            },
        })
        this.linksInput = new Element({
            tag: 'textarea',
            attributes: {
                cols: '30',
                rows: '10',
            },
        })

        this.linksInput.$el.addEventListener('input', (e) => {
            const head = document.querySelector('iframe').contentDocument.head
            head.insertAdjacentHTML('beforeend', e.target.value)
        })

        this.scriptsInput = new Element({
            tag: 'textarea',
            attributes: {
                cols: '30',
                rows: '10',
            },
        })

        this.scriptsInput.$el.addEventListener('input', (e) => {
            const output = document
                .querySelector('iframe')
                .contentDocument.querySelector('output')
            output.insertAdjacentHTML('afterend', e.target.value)
        })

        this.closeButton = new Element({
            tag: 'span',
            innerHTML: 'x',
        })
        this.linkh3 = new Element({
            tag: 'h3',
            innerHTML: 'Link',
        })
        this.scripth3 = new Element({
            tag: 'h3',
            innerHTML: 'Scripts',
        })

        this.popup.appendMany([
            this.linkh3,
            this.linksInput,
            this.scripth3,
            this.scriptsInput,
            this.closeButton,
        ])

        this.saveButton.addEventListener('click', this.saveProject.bind(this))

        this.appendMany([this.saveButton, this.settingsButton, this.popup])

        this.settingsButton.addEventListener('click', (e) => {
            this.popup.$el.classList.toggle('go-down')
        })
        this.closeButton.addEventListener('click', (e) => {
            this.popup.$el.classList.toggle('go-down')
        })
    }

    saveProject() {
        const html = document.querySelector('.html')
        const css = document.querySelector('.css')
        const js = document.querySelector('.js')
        const projects = JSON.parse(localStorage.getItem('projects'))

        let id = location.pathname.split('/')
        id = id[id.length - 1]

        console.log(projects[id])

        let project = projects[id]

        if (id) {
            projects[id].html = html.value
            projects[id].css = css.value
            projects[id].js = js.value
        } else {
            project = new Project({
                html: html.value,
                css: css.value,
                js: js.value,
            })
        }

        projects[id] = project

        localStorage.setItem('projects', JSON.stringify(projects))

        history.pushState(null, null, `/app/${project.id}`)
    }
}

export default NavBar
