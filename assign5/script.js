const prompt = require('prompt-sync')();

function table(num, len) {
    for(let i=1; i<=len ; i++){
       console.log(i + " * " + num + " => " + i*num);
    }
}

let num = prompt("Enter the number for which you want to generate table: ");
let length = prompt("Enter the length to which you want to generate table: ");
table(num, length);