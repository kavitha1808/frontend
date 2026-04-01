// 1. Change heading text
function changeText() {
  const heading = document.getElementById("heading");
  heading.textContent = "Text Changed!";
}

// 2. Change paragraph color
function changeColor() {
  const para = document.querySelector("#para");
  para.style.color = "red";
}

// 3. Add new text dynamically
function addText() {
  const output = document.querySelector("#output");

  const newText = document.createElement("p");
  newText.textContent = "New text added!";

  output.appendChild(newText);
}
