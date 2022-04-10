// Make a Calculator! using prompt(), and variables, make a program that does the following:
// i  Prompts the user for first number.
// ii Stores that first number
// iii Prompts the user for the second number
// Iv Asks which operation does it want to perform  (+,-,/,*,++,--,%)
// V Stores that result and responds with the calculated value by using an alert. 

// let person = prompt("Please enter your name");

let first = parseInt(prompt("Enter a First Value"));
let second =parseInt(prompt("Enter a Second Value"));
var operation =prompt("which operation does it want to perform (+,-,/,*,++,--,%)");

switch (operation) {
    case '+':
        let add=first+second;
      alert("The Sum Of Two Number Is"+(add));
      break;
    case '-':
        alert("The Subtraction Of Two Number Is"+(first-second));
      break;
    case '*':
        alert("The Multiplication Of Two Number Is"+(first*second));
      break;
    case '/':
        alert("The Division Of Two Number Is"+(first/second));
      break;
    case '++':
        alert("The Increment Of First  Number Is"+(first+1));
        alert("The Increment Of Second  Number Is"+(second+1));
      break;
    case '--':
        alert("The Decrement Of First  Number Is"+(first-1));
        alert("The Decrement Of Second  Number Is"+(second-1));
      break;
    case '%':
        alert("The Mode Of Two  Number Is"+(first%second));
      default:
        text = "No value found";
  }

