import Element from '../../Element.mjs'
import ProjectLink from './ProjectLink.mjs'

class Main extends Element {
    constructor(args) {
        super(args)
        this.tag = 'main'

        this.checkbox = new Element({
            tag: 'input',
            attributes: {
                id: 'slide-sidebar',
                type: 'checkbox',
                role: 'button',
            },
        })

        this.label = new Element({
            tag: 'label',
            attributes: { for: 'slide-sidebar' },
            innerHTML: ' <span><i class="fas fa-indent"></i></span>',
        })

        this.container = new Element({
            attributes: { class: 'container' },
            innerHTML: `<div><h1 style="padding: 20px 0">CODE <i class="fas fa-pencil-alt"></i></h1></div>
                     <div class="h"><h3>Your work</h3></div>`,
        })

        this.sidebar = `
        <div class="sidebar">
            <div class="pen"><i class="fas fa-pencil-ruler"></i></div>
            <a href="https://github.com/orgs/Binary-Beastsss/dashboard" target="_blank">Github</a><br/>
            <hr/>
            <a href="/app" data-link>Editor</a>
            <hr/>
        </div>
        `

        this.footer = `
        <div class="footer">
            <div class="u">
                <ul>
                    <li><a href="/about" data-link>About</a></li>
                    <li><a href="https://github.com/orgs/Binary-Beastsss/dashboard" target="_blank"">Support</a></li>
                </ul>
            </div>
            <div class="c"><h1>CODE <i class="fas fa-pencil-alt"></i></h1></div>
        </div>
        `

        this._setup()
    }

    _setup() {
        this.addInnerHTML('beforeend', this.sidebar)

        this.appendMany([this.checkbox, this.label])

        const projects = JSON.parse(localStorage.getItem('projects'))

        if (!projects || !Object.keys(projects).length) {
            this.container.append(
                new Element({
                    attributes: { class: 'empty-hero' },
                    innerHTML: `
                <h1>Go to the editor to start a project</h1>
                <a href="/app" data-link>Editor</a>
                `,
                })
            )
        }

        for (const id in projects) {
            this.container.append(
                new ProjectLink({
                    id,
                    tag: 'a',
                    title: projects[id].title,
                    dateLastSaved: projects[id].dateLastSaved,
                    attributes: {
                        class: 'project-link',
                        href: `/app/${id}`,
                        'data-link': '',
                    },
                })
            )
        }

        this.container.addInnerHTML('beforeend', this.footer)
        this.append(this.container)
    }
}

export default Main
