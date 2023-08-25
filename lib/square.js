const Shape = require('./shape');

class Square extends Shape{
    render(){
        return `<rect x = '50' y = '20' fill = '${this.color}'/>`
    }
}

module.exports = Square;