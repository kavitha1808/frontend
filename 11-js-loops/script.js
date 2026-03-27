console.log("DAY 11 – JavaScript Loops");
console.log("----------------------------");

// 1. Print 1 to 10
console.log("1. Print 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("----------------------------");

// 2. Print even numbers 1 to 50
console.log("2. Even numbers from 1 to 50:");
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

console.log("----------------------------");

// 3. Multiplication table
console.log("3. Multiplication table of 5:");
let number = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

console.log("----------------------------");

// 4. Sum of 1 to N
console.log("4. Sum of 1 to N:");
let n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log(`Sum of numbers from 1 to ${n} = ${sum}`);

console.log("----------------------------");

// 5. Reverse count 10 to 1
console.log("5. Reverse count from 10 to 1:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("----------------------------");

// while loop example
console.log("While loop example:");
let count = 1;

while (count <= 5) {
  console.log("Count:", count);
  count++;
}

console.log("----------------------------");

// do...while loop example
console.log("Do...while loop example:");
let x = 1;

do {
  console.log("Value:", x);
  x++;
} while (x <= 5);

console.log("----------------------------");

// break example
console.log("Break example:");
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    break;
  }
  console.log(i);
}

console.log("----------------------------");

// Mini Project: Multiplication Table Generator
console.log("Mini Project – Multiplication Table Generator");

let tableNumber = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}
