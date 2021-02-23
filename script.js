const card = document.querySelector(".card__inner");
const questionEl = document.getElementById("question")
const answerEl = document.getElementById("answer");
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

currentQuestion = 0;

function getQuestion() {
    questionEl.innerText = `${questions[currentQuestion]["question"]}`;
    setTimeout(function() {
    answerEl.innerText = `${questions[currentQuestion]["answer"]}`;
    currentQuestion ++;
  }, 1000);
}

getQuestion();

button.addEventListener("click", function() {
  getQuestion(questions[currentQuestion]);
});

card.addEventListener("click", function(e) {
  card.classList.toggle('is-flipped');
});

