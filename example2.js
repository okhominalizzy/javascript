const prompt = require("prompt-sync")({sigint: true});

const number = prompt("Enter a number: ");
if (number > 0) {
    console.log("the number is positive")
}
else if (number == 0) {
    console.log("the number is zero")
}
else{
    console.log("the number is negative")
}