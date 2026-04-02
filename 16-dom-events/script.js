// Button Click
document.getElementById("alertBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

// Input Preview
const input = document.getElementById("inputBox");
const output = document.getElementById("output");

input.addEventListener("input", () => {
  output.textContent = input.value;
});

// Hover Effect
const box = document.getElementById("box");

box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "green";
});

box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "red";
});

// Toggle Message
const toggleBtn = document.getElementById("toggleBtn");
const message = document.getElementById("message");

toggleBtn.addEventListener("click", () => {
  message.style.display =
    message.style.display === "none" ? "block" : "none";
});

// Form Submit
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
});
