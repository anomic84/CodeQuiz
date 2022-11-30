var containerStartEl = document.getElementById('start-section')
var containerQuestionEl = document.getElementById('questions-section')
var containerFinishEl = document.getElementById('finish')
var containerHighScoresEl = document.getElementById('finish')

var correctEl = document.getElementById('correct')
var wrongEl = document.getElementById('wrong')
//buttons
var buttonStart = document.getElementById('start-button')
var buttonGoBack = document.getElementById('back-button')
var buttonClear = document.getElementById("clear-high-scores")
//questions/answers element
var questionsEL = document.getElementById('question')
var answerbuttonsEl = document.getElementById("answer-buttons")
var timerEl = document.querySelector("#timer");
var score = 0;
var timeleft;
var gameover;
timerEl.innerText = 0;

//High Score Array


//assign array details for questions 
var arrayShuffledQuestions
var QuestionIndex = 0

// The array of questions for our quiz game.
var questions = [
    {
        q: 'Arrays in Javascript can be used to store __________.',
        a: '4. all of the above',
        choices: [{ choice: '1. numbers' }, { choice: '2. booleans' }, { choice: '3. strings' }, { choice: '4. all of the above' }]
    },
    {
        q: 'Inside which HTML element do we put the javascript?',
        a: '3. <script>',
        choices: [{ choice: '1. <h1>' }, { choice: '2. <js>' }, { choice: '3. <script>' }, { choice: '4. <head>' }]
    },
    {
        q: 'In the code -- setinterval(time(),1000) -- what is time()?',
        a: '1. callback function',
        choices: [{ choice: '1. callback function' }, { choice: '2. undefined' }, { choice: '3. variable' }, { choice: '4. all of the above' }]
    },
    {
        q: 'What syntax would call a function?',
        a: '4. function()',
        choices: [{ choice: '1. var function' }, { choice: '2. function' }, { choice: '3. call function' }, { choice: '4. function()' }]
    },
    {
        q: 'When did javascript first appear?',
        a: '1. 1995',
        choices: [{ choice: '1. 1995' }, { choice: '2. Roaring twenties' }, { choice: '3. 2005' }, { choice: '4. 2000' }]
    },
    {
        q: 'What does DOM stand for?',
        a: '2. Document Object Model',
        choices: [{ choice: '1. Do Overnight Modules' }, { choice: '2. Document Object Model' }, { choice: '3. Divas Obviously Model' }, { choice: '4. Do Oo Mo' }]
    },
    {
        q: 'What is getItem commonly used for?',
        a: '2. local storage',
        choices: [{ choice: '1. adding drama' }, { choice: '2. local storage' }, { choice: '3. online shopping' }, { choice: '4. naming a variable' }]
    },
];





//if go back button is hit on high score page


//every second, check if game-over is true, or if there is time left. Start time at 30. 
function setTime() {
    timeleft = 30;

    var timercheck = setInterval(function () {
        timerEl.innerText = timeleft;
        timeleft--

        if (gameover) {
            clearInterval(timercheck)
        }

        if (timeleft < 0) {
            showScore()
            timerEl.innerText = 0
            clearInterval(timercheck)
        }

    }, 1000)
}


function startGame() {
    //add classes to show/hide start and quiz screen
    containerStartEl.classList.remove('show');
    containerStartEl.classList.add('hide');
    containerQuestionEl.classList.remove('hide');
    containerQuestionEl.classList.add('show');
    //Shuffle the questions so they show in random order
    arrayShuffledQuestions = questions.sort(() => Math.random() - 0.5)
    setTime()
    setQuestion()
}

//set next question for quiz
function setQuestion() {
    resetAnswers()
    displayQuestion(arrayShuffledQuestions[QuestionIndex])
}

//remove answer buttons
var resetAnswers = function () {
    while (answerbuttonsEl.firstChild) {
        answerbuttonsEl.removeChild(answerbuttonsEl.firstChild)
    };
};

//display question information (including answer buttons)
var displayQuestion = function (index) {
    questionsEL.innerText = index.q
    for (var i = 0; i < index.choices.length; i++) {
        var answerbutton = document.createElement('button')
        answerbutton.innerText = index.choices[i].choice
        answerbutton.classList.add('btn')
        answerbutton.classList.add('answerbtn')
        // answerbutton.addEventListener("click", answerCheck)
        answerbuttonsEl.appendChild(answerbutton)
    }
};
//display correct! on screen

//display wrong! on screen


//check if answer is correct    


//go to next question, check if there is more questions


//Display total score screen at end of game

//create high score values


//push and sort scores


//clear visibile list to resort

//create elements in order of high scores

//save high score


//load values/ called on page load


//display high score screen from link or when intiials entered

//clears high scores


//on start click, start game
buttonStart.addEventListener("click", startGame)
//on submit button -- enter or click

//when view high-scores is clicked

//Go back button

//clear scores button
