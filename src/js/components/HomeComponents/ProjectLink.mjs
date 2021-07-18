import Element from '../../Element.mjs'

export default class ProjectLink extends Element {
    constructor({ title, id, dateLastSaved, ...args }) {
        super(args)

        this.title = title
        this.id = id
        this.dateLastSaved = dateLastSaved

        this._setup()
    }

    _setup() {
        this.$el.innerHTML = `
            <h2>Project</h2>
            <small>Last saved: ${new Date(
                this.dateLastSaved
            ).toLocaleDateString()}</small>
        `
    }
}
