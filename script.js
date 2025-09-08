function detectAge() {
  let birthYear = document.getElementById("birthYear").value;
  let result = document.getElementById("result");

  if (birthYear === "" || birthYear <= 0) {
    result.textContent = "⚠️ Please enter a valid year!";
    result.style.color = "yellow";
    return;
  }

  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;

  if (age < 0) {
    result.textContent = "⚠️ Future year not valid!";
    result.style.color = "red";
    return;
  }

  let category = "";
  if (age < 13) {
    category = "👶 Child";
  } else if (age < 20) {
    category = "🧑 Teen";
  } else if (age < 60) {
    category = "👨 Adult";
  } else {
    category = "👴 Senior";
  }

  result.textContent = `✅ You are ${age} years old (${category})`;
  result.style.color = "#fff";
}
