const Circle = require ('./circle');
const Square = require ('./square');
const Triangle = require ('./triangle');

describe('Circle', () => {
    test('blueCircle', () => {
        const shape = new Circle ();
        const expectedShape = `<circle cx = '150' cy = '100' r = '80' fill = 'blue'/>`;
        shape.setColor('blue');
        expect(shape.render()).toEqual(expectedShape);
    })
})

describe('Square', () => {
    test('blueSquare', () => {
        const shape = new Square ();
        const expectedShape = `<rect x='50' y='50' height='200' width='200' fill='blue'/>`;
        shape.setColor('blue');
        expect(shape.render()).toEqual(expectedShape);
    })
})

describe('Triangle', () => {
    test('blueTriangle', () => {
        const shape = new Triangle ();
        const expectedShape = `<polygon points = '150, 18 244, 182 56, 182' fill = 'blue'/>`;
        shape.setColor('blue');
        expect(shape.render()).toEqual(expectedShape);
    })
})