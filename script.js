const button = document.querySelector(".button-check"),
  answer = document.querySelector(".answer");

button.addEventListener("click", function () {
  let word = document.querySelector(".input-word").value.toUpperCase();
  wordReversed = word.split("").reverse().join("");

  if (wordReversed == word) {
    answer.innerHTML = "This is a palindrome";
  } else {
    answer.innerHTML = "This is not a palindrome";
  }
});
