const card = document.querySelector(".card__inner");
const question = document.getElementById("#question")
const answer = document.getElementById("#answer");



card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});