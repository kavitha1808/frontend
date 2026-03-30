// ==========================
// ARRAY METHODS PRACTICE
// ==========================

// 1. Double all numbers
const numbers = [10, 20, 30, 40];

const doubled = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubled);


// 2. Filter even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);


// 3. Find a product under ₹500
const products = [
  { name: "Shoes", price: 1000 },
  { name: "T-shirt", price: 400 },
  { name: "Watch", price: 1500 }
];

const cheapProduct = products.find(product => product.price < 500);
console.log("Product under 500:", cheapProduct);


// ==========================
// STRING METHODS PRACTICE
// ==========================

// 4. Split full name
const fullName = "Kavitha R";

const nameParts = fullName.split(" ");
console.log("First Name:", nameParts[0]);
console.log("Last Name:", nameParts[1]);


// 5. Check if string includes word
const sentence = "I am learning JavaScript";

const hasWord = sentence.includes("JavaScript");
console.log("Includes 'JavaScript'?", hasWord);


// ==========================
// EXTRA METHODS
// ==========================

// slice()
const sliced = numbers.slice(1, 3);
console.log("Sliced Numbers:", sliced);

// join()
const words = ["Learn", "JS", "Daily"];
const sentenceJoined = words.join(" ");
console.log("Joined Sentence:", sentenceJoined);

// forEach()
numbers.forEach(num => {
  console.log("Number:", num);
});
