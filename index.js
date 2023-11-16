const inquirer = require("inquirer");
const fs = require("fs");
const SVG = require('./lib/svg');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');

function makeLogo(){
    inquirer
        .prompt([
            {
                type: "input",
                name: "text",
                message: "Please enter text for logo. (Text should be up to be 3 characters)",
            },
            {
                type: "input",
                name: "textcolor",
                message: "Please enter a text color (Enter keyword or a hexadecimal number):",
            },
            {

                type: "input",
                name: "backgroundColor",
                message: "Please enter shape color (Enter keyword (or a hexadecimal number):",
            },
            {
                type: "list",
                name: "shape",
                message: "Please choose which shape you would like?",
                choices: ["Circle", "Square", "Triangle"],
            },
        ]).then((res) => {
            console.log(res);
            let shapeLogo;
             switch(res.shape){
                case "Circle": 
                 shapeLogo = new Circle()
                 break;

                 case "Square": 
                 shapeLogo = new Square()
                 break;
                 
                 case "Triangle": 
                 shapeLogo = new Triangle()
                 break;
             }
             shapeLogo.setColor(res.backgroundColor);
             const newLogo = new SVG ()
             newLogo.setShape(shapeLogo)
             newLogo.setText(res.textcolor,res.text)
             if(res.text.length > 3){
                console.log('Only 3 characters allowed!')
                makeLogo()
        
             }
             renderMyLogo('logo.svg', newLogo.render());
        })
}
function renderMyLogo(filename, res){
    fs.writeFileSync(filename, res)
    console.log('')
    console.log('Generated logo.svg')
}
makeLogo();