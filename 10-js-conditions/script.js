console.log("===== DAY 10 – Operators + Conditions =====");

// ===============================
// 1. Arithmetic Operators
// ===============================
let a = 20;
let b = 6;

console.log("Arithmetic Operators:");
console.log("a =", a, ", b =", b);
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("--------------------------------");

// ===============================
// 2. Comparison Operators
// ===============================
console.log("Comparison Operators:");
console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a >= b:", a >= b);
console.log("a <= b:", a <= b);
console.log("a == b:", a == b);
console.log("a != b:", a != b);
console.log("--------------------------------");

// ===============================
// 3. Logical Operators
// ===============================
let age = 18;
let hasID = true;

console.log("Logical Operators:");
console.log("Eligible to enter:", age >= 18 && hasID);
console.log("Teen or adult:", age >= 13 || age >= 18);
console.log("Not eligible:", !(age >= 18));
console.log("--------------------------------");

// ===============================
// 4. Age Eligibility Checker
// ===============================
let userAge = 17;

if (userAge >= 18) {
  console.log("Age Eligibility Checker: Eligible to vote");
} else {
  console.log("Age Eligibility Checker: Not eligible to vote");
}
console.log("--------------------------------");

// ===============================
// 5. Pass/Fail Checker
// ===============================
let marks = 42;

if (marks >= 35) {
  console.log("Pass/Fail Checker: Pass");
} else {
  console.log("Pass/Fail Checker: Fail");
}
console.log("--------------------------------");

// ===============================
// 6. Grade Calculator
// ===============================
let score = 87;
let grade;

if (score >= 90) {
  grade = "A+";
} else if (score >= 80) {
  grade = "A";
} else if (score >= 70) {
  grade = "B";
} else if (score >= 60) {
  grade = "C";
} else if (score >= 50) {
  grade = "D";
} else if (score >= 35) {
  grade = "E";
} else {
  grade = "F";
}

console.log("Grade Calculator:");
console.log("Score:", score);
console.log("Grade:", grade);
console.log("--------------------------------");

// ===============================
// 7. Even/Odd Checker
// ===============================
let number = 13;

if (number % 2 === 0) {
  console.log("Even/Odd Checker:", number, "is Even");
} else {
  console.log("Even/Odd Checker:", number, "is Odd");
}
console.log("--------------------------------");

// ===============================
// 8. Ternary Operator Example
// ===============================
let attendance = 80;
let examStatus = attendance >= 75 ? "Allowed for Exam" : "Not Allowed for Exam";

console.log("Ternary Operator:");
console.log("Attendance:", attendance + "%");
console.log("Exam Status:", examStatus);
console.log("--------------------------------");

// ===============================
// 9. Mini Project – Student Result Checker
// ===============================
console.log("===== MINI PROJECT: Student Result Checker =====");

let studentName = "Kavitha";
let tamil = 88;
let english = 76;
let maths = 91;
let science = 69;
let social = 84;

// Total and Average
let total = tamil + english + maths + science + social;
let average = total / 5;

// Pass condition: all subjects >= 35
let isPass =
  tamil >= 35 &&
  english >= 35 &&
  maths >= 35 &&
  science >= 35 &&
  social >= 35;

// Grade based on average
let finalGrade;

if (average >= 90) {
  finalGrade = "A+";
} else if (average >= 80) {
  finalGrade = "A";
} else if (average >= 70) {
  finalGrade = "B";
} else if (average >= 60) {
  finalGrade = "C";
} else if (average >= 50) {
  finalGrade = "D";
} else if (average >= 35) {
  finalGrade = "E";
} else {
  finalGrade = "F";
}

// Result using ternary
let result = isPass ? "PASS" : "FAIL";

console.log("Student Name:", studentName);
console.log("Tamil:", tamil);
console.log("English:", english);
console.log("Maths:", maths);
console.log("Science:", science);
console.log("Social:", social);
console.log("Total:", total);
console.log("Average:", average.toFixed(2));
console.log("Result:", result);
console.log("Final Grade:", finalGrade);
console.log("================================");
