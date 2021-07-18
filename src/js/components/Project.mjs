import Random from '../utils/Random.mjs'

export default class Project {
    static idChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`

    constructor({ title = 'Undefined', html, css, js, id }) {
        this.title = title
        this.html = html
        this.css = css
        this.js = js
        console.log(id)
        this.id = id !== null ? id : this.generateID(10)
        this.dateLastSaved = new Date()
    }

    generateID(size) {
        let ID = ''
        const { randomNum } = Random
        const { idChars } = Project

        for (let i = 0; i < size; i++) {
            ID += idChars[randomNum(0, idChars.length)]
        }

        return ID
    }
}
