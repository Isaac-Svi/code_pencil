import View from '../View.mjs'
import Element from '../Element.mjs'
import NavBar from '../components/AppComponents/NavBar.mjs'
import ContainerDiv from '../components/AppComponents/ContainerDiv.mjs'

export default class AppPage extends View {
    constructor({ params, ...args }) {
        super(args)
        this.params = params
        const base = window.location.origin
        this.importStyle(`${base}/src/css/app.css`)
    }

    getContent() {
        if (!('id' in this.params)) return

        const projects = JSON.parse(localStorage.getItem('projects'))

        const { html, css, js } = projects[this.params.id]

        return { html, css, js }
    }

    async view(app) {
        const Nav = new NavBar()

        this.appContent = new Element()
        this.appContent.appendMany([Nav, ContainerDiv])

        this.append(this.appContent)
        app.clear()
        app.append(this)
    }
}
