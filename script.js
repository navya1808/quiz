//quiz data
const quizData = [
  {
    question: "What is Navya's favourite food?",
    a: "Cholle Bhature",
    b: "Pizza",
    c: "Rajma Chawal",
    d: "Dosa",
    correct: "d",
  },
  {
    question: "What is Navya's favourite color?",
    a: "Red",
    b: "Blue",
    c: "Pink",
    d: "Black",
    correct: "b",
  },
  {
    question: "What is Navya's favourite game?",
    a: "Ludo",
    b: "Carom",
    c: "Badminton",
    d: "Football",
    correct: "a",
  },
  {
    question: "What is Navya's favourite chocolate?",
    a: "Kitkat",
    b: "Munch",
    c: "Cadbury",
    d: "5 star",
    correct: "a",
  },
];

//fetched all the id
let quiz = document.getElementById("quiz"); 
let questionE1 = document.getElementById("question");
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let button = document.getElementById("submit");
let form = document.getElementById("form");
let hidden = document.getElementById("hidden");

//for traversing the currentquestion
let currentquestion = 0;

//for total score
let score = 0;

//for loading the quiz
loadquiz();

//function to load the quiz
function loadquiz() {
  let currentquizquestion = quizData[currentquestion];
  questionE1.innerText = currentquizquestion.question;
  a_text.innerText = currentquizquestion.a;
  b_text.innerText = currentquizquestion.b;
  c_text.innerText = currentquizquestion.c;
  d_text.innerText = currentquizquestion.d;
}

//for getting the checked ans.
function getanswers() {
  const answerEls = document.querySelectorAll(".answer");
  let answer = undefined;
  answerEls.forEach((answerEl) => {
      console.log(answerEls);
    if (answerEl.checked) {
        console.log(answerEl);
      answer = answerEl.id;
      return answer;
    } 
});
  return answer;
}

//event listener on button
button.addEventListener("click", () => {
  console.log("clicked");
 let answer = getanswers();
  console.log(answer);
  
  //if one of the radio buuton is checked
  if(answer !=undefined)
  {
      if(answer === quizData[currentquestion].correct)
      {
          score++;
      }
      currentquestion++;
      if(currentquestion < quizData.length)
      {
      loadquiz();
      }
      else{
         //for loading up the final score and ending up the quiz 
         quiz.innerHTML = `<div style="text-align : center;
         background-color: none;
         font-style: italic;
         font-size: 30px;
         margin-top:5px;" ><b>Yeahhhh !!! you have successfully completed your quiz!!<br>
         Your score is ${score}/${quizData.length}</b></div>
         <button onClick="location.reload()">Play Again</button>`
      }
  }
  form.reset();
});
