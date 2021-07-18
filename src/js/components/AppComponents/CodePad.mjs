const delay = (ms) => new Promise((res) => setTimeout(res, ms))

class CodePad {
    constructor({ outputElement, htmlPad, cssPad, jsPad }) {
        this.$output = outputElement.$el
        this.$html = htmlPad.$el
        this.$css = cssPad.$el
        this.$js = jsPad.$el

        this.toggle = false

        setTimeout(() => {
            this._setupOutput()
        }, 500)
    }

    _setupOutputElements() {
        // setting up output body, which is app
        this.$outputEntry = this.$output.contentDocument.body.querySelector('output')

        // setting up style input
        this.$styleTag = this.$output.contentDocument.head.querySelector('style')

        // setting up script input
        this.$scriptTag = this.$output.contentDocument.body.querySelector('script')
    }

    _setupOutput() {
        this._setupOutputElements()

        this.$outputEntry.innerHTML = this.$html.value
        this.$styleTag.innerHTML = this.$css.value
        this.$scriptTag.innerHTML = this.$js.value

        this.$html.addEventListener('input', this.handleChange.bind(this))
        this.$css.addEventListener('input', this.handleChange.bind(this))
        this.$js.addEventListener('input', this.handleJSChange.bind(this))
        this.$html.addEventListener('keydown', this.filterText.bind(this))
        this.$css.addEventListener('keydown', this.filterText.bind(this))
        this.$js.addEventListener('keydown', this.filterText.bind(this))
    }

    cover() {
        if (this.toggle) return
        this.toggle = true
        setTimeout(() => {
            this.toggle = false
        }, 500)
    }

    handleChange() {
        if (this.$js.value !== '') {
            this.handleJSChange()
            return
        }

        this.$outputEntry.innerHTML = this.$html.value
        this.$styleTag.innerHTML = this.$css.value
    }

    async handleJSChange() {
        if (this.toggle) return
        this.cover()

        this.$output.contentWindow.location.reload()

        await delay(500)
        this._setupOutputElements()

        this.$outputEntry.innerHTML = this.$html.value
        this.$styleTag.innerHTML = this.$css.value
        this.$scriptTag.innerHTML = this.$js.value
    }

    async filterText(e) {
        if (e.key === 'Tab') {
            e.preventDefault()

            const { selectionStart } = e.target
            const start = e.target.value.slice(0, selectionStart)
            const end = e.target.value.slice(selectionStart)

            e.target.value = start + '    ' + end

            window.getSelection().empty()
            window.getSelection().removeAllRanges()

            e.target.selectionStart = e.target.selectionEnd = selectionStart + 4
        }
    }
}

export { CodePad }
