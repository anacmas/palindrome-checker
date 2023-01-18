const button = document.querySelector(".button-check");

button.addEventListener("click", function () {
  let answer = document.querySelector(".answer");
  let word = document.querySelector(".input-word").value;
  let wordUppercase = word.toUpperCase();
  let wordReversed = wordUppercase.split("").reverse().join("");

  if (wordReversed == wordUppercase) {
    answer.innerHTML = `${word} is a palindrome`;
  } else {
    answer.innerHTML = `${word} is not a palindrome`;
  }
});
