const Shape = require('./shape');

class Square extends Shape{
    render(){
        return `<rect x='50' y='25' height='200' width='200' fill='${this.color}'/>`
    }
}

module.exports = Square;