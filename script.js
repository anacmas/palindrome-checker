const button = document.querySelector(".button-check"),
  answer = document.querySelector(".answer");

button.addEventListener("click", function () {
  let word = document.querySelector(".input-word").value;
  wordReversed = word.toUpperCase().split("").reverse().join("");

  if (wordReversed == word) {
    answer.innerHTML = `${word} is a palindrome`;
  } else {
    answer.innerHTML = `${word} is not a palindrome`;
  }
});
