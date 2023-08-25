class SVG {
    constructor (){
        this.shapeTextEl = ''
        this.shapeEl = ''

    }
    renderSVG(){
        return `<svg version = '1.1' width = '300' height = '200' xmlns = 'http://www.w3.org/2000/svg'>${this.shapeEl}${this.shapeTextEl}</svg>`
    }
    setText(color,text){
        this.shapeTextEl = `<text x = '150' y = '125' font-size = '40' text-anchor = 'middle' fill = '${color}'>${text}</text>`
    }
    setShape(shape){
        this.shapeEl = shape.render()

    }
}

module.exports = SVG;