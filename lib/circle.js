const Shape = require('./shape');

class Circle extends Shape{
    render(){
        return `<circle cx = '150' cy = '115' r = '80' fill = '${this.color}'/>`
    }
}

module.exports = Circle;