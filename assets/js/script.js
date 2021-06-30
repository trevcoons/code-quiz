// Keeping track of the location and time/ state of the quiz 
// variables to reference the DOM elements or the browser interface

var time = myQuestions.length * 15;
var timerId;
var currentQuestions = 0;
// questions located
// timer located
// choices 
// start
// submit
var questonEl = document.getElementById("question");
var choiceEl = document.getElementById("choice");
// we have this
var timeEl = document.getElementById("time");
var submitl = document.getElementById("submit");
var initialEl = document.getElementById("intiial");


// a function to start the quiz 

function startQuiz() {

    // hide the start page so that questions show up 
    // we have this too
var startEl = document.getElementById("startScreen");
startEl.setAttribute("class","hide")

questionEl.removeAttribute("class");

timerId = setInterval(clockTick, 1000);

timeEl.textContent=time;

showQuestion()

}

function showQuestion() {
    var thisQuestion = myQuestions[currentQuestions]
    var titleEl = document.getElementById("questionTitle");
    titleEl.textContent = thisQuestion.title;
    choiceEl.innerHTML= "",

    // loop over all the choices 
    thisQuestion.choices.forEach(function(choice, i) {
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice)
        choiceButton.textContent = i + 1 + ", " + choice;
        choiceButton.onClick = clickedQuestions;
        choicesEl.appendChild(choiceButton)
    })
}
// a function that handles the question clicks
function clickedQuestions() {

}

function endQuiz() {

}

function saveHighscores() {

}

function clockTick() {

    time--;
    timeEl.textContent= time;
    if (time <=0){
        endQuiz()
    }

}

startButton.onclick = startQuiz()
submitButton.onclick = saveHighscores()







