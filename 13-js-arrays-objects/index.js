// ==============================
// DAY 13 – Arrays + Objects
// ==============================

// 1. Create student names array
let students = ["Arun", "Bala", "Charan"];

console.log("Initial Students:");
console.log(students);

// 2. Add/remove names

// Add elements
students.push("David");      // add at end
students.unshift("Zara");    // add at beginning

// Remove elements
students.pop();              // remove last
students.shift();            // remove first

console.log("\nUpdated Students:");
console.log(students);


// 3. Create product object
let product = {
  name: "Phone",
  price: 20000,
  brand: "Samsung"
};

console.log("\nSingle Product:");
console.log(product);

// Access properties
console.log("\nAccessing Properties:");
console.log(product.name);
console.log(product["price"]);


// 4. Create array of objects
let products = [
  { name: "Phone", price: 20000 },
  { name: "Laptop", price: 50000 },
  { name: "Tablet", price: 15000 }
];

console.log("\nProducts Array:");
console.log(products);


// 5. Print all product names
console.log("\nProduct Names:");
for (let i = 0; i < products.length; i++) {
  console.log(products[i].name);
}


// ==============================
// MINI PROJECT
// Student & Product Data Practice
// ==============================

// Students Management
let studentList = ["Arun", "Bala", "Charan"];

studentList.push("David");  // add
studentList.pop();          // remove

console.log("\nFinal Student List:");
console.log(studentList);


// Product Management
let productList = [
  { name: "Phone", price: 20000 },
  { name: "Laptop", price: 50000 },
  { name: "Tablet", price: 15000 }
];

// Add new product
productList.push({ name: "Watch", price: 5000 });

// Display product names
console.log("\nFinal Product Names:");
productList.forEach(product => {
  console.log(product.name);
});
