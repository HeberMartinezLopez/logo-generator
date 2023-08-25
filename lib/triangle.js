const Shape = require('./shape');

class Triangle extends Shape{
    render(){
        return `<polygon points = '50,10 10,90 90,90' fill = '${this.color}'/>`;
    }
}

module.exports = Triangle;