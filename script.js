

const check = document.querySelector(".btn");
const text = document.getElementById("text");
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
const result = document.querySelector(".sentence");

check.addEventListener("click", () => {
  let vowelsLetter = 0;
  for (let i = 0; i < text.value.length; i++) {
    if (vowels.includes(text.value[i])) {
      vowelsLetter++;
    }
  }

  result.textContent = `There are ${vowelsLetter} vowels in ${text.value}`;
});

text.addEventListener("focus", () => {
  result.textContent = "";
  text.value = "";
});