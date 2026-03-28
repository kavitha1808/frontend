// DAY 12 – Functions

// 1. Function Declaration
function greetUser() {
  console.log("Welcome to JavaScript Functions!");
}
greetUser();


// 2. Add Function
function add(a, b) {
  return a + b;
}
console.log("Addition:", add(10, 5));


// 3. Subtract Function
function subtract(a, b) {
  return a - b;
}
console.log("Subtraction:", subtract(10, 5));


// 4. Percentage Calculator
function calculatePercentage(obtainedMarks, totalMarks) {
  return (obtainedMarks / totalMarks) * 100;
}
console.log("Percentage:", calculatePercentage(450, 500) + "%");


// 5. Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
console.log("Temperature in Fahrenheit:", celsiusToFahrenheit(30) + "°F");


// 6. Simple Interest Function
function simpleInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}
console.log("Simple Interest:", simpleInterest(10000, 5, 2));


// 7. Function Expression
const multiply = function(a, b) {
  return a * b;
};
console.log("Multiplication (Function Expression):", multiply(4, 6));


// 8. Arrow Function
const divide = (a, b) => {
  return a / b;
};
console.log("Division (Arrow Function):", divide(20, 4));


// 9. Scope Basics
let globalMessage = "I am a global variable";

function showScope() {
  let localMessage = "I am a local variable";
  console.log(globalMessage);
  console.log(localMessage);
}
showScope();


// Mini Project: Utility Functions Collection
function square(num) {
  return num * num;
}

function isEven(num) {
  return num % 2 === 0;
}

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log("Square of 7:", square(7));
console.log("Is 10 even?", isEven(10));
console.log("Full Name:", getFullName("Kavitha", "G"));
