const inquirer = require("inquirer");
const fs = require("fs");

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
        })
}
makeLogo();