const card = document.querySelector(".card__inner");
const question = document.getElementById("#question")
const answer = document.getElementById("#answer");
// const button = document.getElementById("#nextCard");

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  console.log(array[1]);
}
shuffleArray(questions);

// button.addEventListener("click", function(e) {
//   console.log("button clicked");
//   nextCard();
// });

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});

