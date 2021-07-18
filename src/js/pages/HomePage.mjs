import Main from '../components/HomeComponents/Main.mjs'
import View from '../View.mjs'

export default class Home extends View {
    constructor(args) {
        super(args)
        this.importStyle('/src/css/style.css')
        this.main = new Main()
        this.setup()
    }

    setup() {
        this.append(this.main)
    }
}
