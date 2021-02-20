const card = document.querySelector(".card__inner");
const question = document.getElementById("question")
const answer = document.getElementById("answer");
const button = document.getElementById("nextCard");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

shuffleArray(questions);

function getQuestion() {
  question.innerHTML = `<h2>${questions[0]["question"]}</h2>`;
  answer.innerHTML = `<h3>${questions[0]["answer"]}</h3>;`
}
getQuestion();

function nextCard() {
  for (let i = 1; i < questions.length; i++) {
  question.innerHTML = `<h2>${questions[i]["question"]}</h2>`;
  answer.innerHTML = `<h3>${questions[i]["answer"]}</h3>`;
  }
}

button.addEventListener("click", function(e) {
  nextCard();
});

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});

