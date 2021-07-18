export default class Random {
    static randomNum(min, max) {
        max -= min
        return Math.floor(Math.random() * max + min)
    }
}
