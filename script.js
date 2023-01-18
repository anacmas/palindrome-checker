const button = document.querySelector(".button-check");
const answer = document.querySelector(".answer");

button.addEventListener("click", function () {
  let word = document.querySelector(".input-word").value;
  wordUppercase = word.toUpperCase();
  wordReversed = wordUppercase.split("").reverse().join("");

  if (wordReversed == wordUppercase) {
    answer.innerHTML = `${word} is a palindrome`;
  } else {
    answer.innerHTML = `${word} is not a palindrome`;
  }
});
