// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE
var fortune

// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

// YOUR CODE GOES HERE

let response;
function checkFortune(fortune){
    if ((fortune>=0)&&(fortune<=3))
response = "Oh no! You selected a low Fortune!"
    else if ((fortune>3)&&(fortune<=7))
response = "You selected an average fortune."
    else if ((fortune>7)&&(fortune<=10))
response = "Congratulations! You selected a good fortune."
    else (response = "It was hard to determine your fortune, try again!")

        return response;
}
console.log('results: ', checkFortune(8));