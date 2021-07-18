import View from '../View.mjs'

class AboutPage extends View {
    constructor(args) {
        super(args)

        this.importStyle('http://127.0.0.1:5500/src/css/about.css')
    }

    async view(app) {
        this.$el.innerHTML = `
        <div class="nav">
        <div class="ul-con">
            <ul>
                <li><a href="/" data-link>Home</a></li>
                <li><a href="/app" data-link>Editor</a></li>
            </ul>
        </div>
        <div><h1>CODE <i class="fas fa-pencil-alt"></i></h1></div>
        </div>
        </div>
        <div class="a-container">
        <div class="first">
            <img id="me" src="images/my-pic.jpg" alt="me">
            <p>Ido Sarue Full stack developer<br><a class="a" href="https://github.com/idosarue">Github</a></p>
        </div>
        <div class="second">
            <p>Yitzchak Sviridyuk Full stack developer<br><a class="a" href="https://github.com/Isaac-Svi">Github</a></p>
            <img id="m" src="images/me.jpg" alt="me">
        </div>
        <div class="footer">
            <div class="ul">
                <ul>
                    <li><a href="https://github.com/orgs/Binary-Beastsss/dashboard" target="_blank">Binary Beasts Github</a></li>
                </ul>
            </div>
            <div class="c"><h1>CODE</h1></div>
        </div>
        </div>
        `

        app.clear()
        app.append(this)
    }
}

export default AboutPage
