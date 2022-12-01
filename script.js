var containerStartEl = document.getElementById('start-section')
var containerQuestionEl = document.getElementById('questions-section')
var containerFinishEl = document.getElementById('finish')
var containerScoreEl = document.getElementById("your-score")
var containerHighScoresEl = document.getElementById('hssection')
// 
var formInitials = document.getElementById("initials-form")
var ViewHighScoreEl = document.getElementById("view-high-scores")
var listHighScoreEl = document.getElementById("high-score-list")
// 
var correctEl = document.getElementById('correct')
var wrongEl = document.getElementById('wrong')
//buttons
var buttonStart = document.getElementById('start-button')
var buttonGoBack = document.getElementById('back-button')
var buttonClear = document.getElementById('clear-high-scores')
//questions/answers element
var questionsEL = document.getElementById('question')
var answerButtonsEl = document.getElementById("answer-buttons")
var timerEl = document.querySelector("#timer");
var score = 0;
var timeleft;
var gameover;
timerEl.innerText = 0;

//on start click, start game
buttonStart.addEventListener("click", startGame)
//on submit button -- enter or click
formInitials.addEventListener("submit", createHighScore)
//when view high-scores is clicked
ViewHighScoreEl.addEventListener("click", displayHighScores)
//Go back button
buttonGoBack.addEventListener("click", renderStartPage)
//clear scores button
buttonClear.addEventListener("click", clearScores)


//High Score Array
var HighScores = [];

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
function renderStartPage() {
    containerFinishEl.classList.remove("show")
    containerFinishEl.classList.add("hide")
    containerHighScoresEl.classList.remove("show")
    containerHighScoresEl.classList.add("hide")
    containerStartEl.classList.remove("hide")
    containerStartEl.classList.add("show")
    containerScoreEl.removeChild(containerScoreEl.lastChild)
    QuestionIndex = 0
    gameover = ""
    timerEl.textContent = 0
    score = 0

    if (correctEl.className = "show") {
        correctEl.classList.remove("show");
        correctEl.classList.add("hide")
    }
    if (wrongEl.className = "show") {
        wrongEl.classList.remove("show");
        wrongEl.classList.add("hide");
    }
}

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
function resetAnswers() {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    };
};

//display question information (including answer buttons)
function displayQuestion(index) {
    questionsEL.innerText = index.q
    for (var i = 0; i < index.choices.length; i++) {
        var answerbutton = document.createElement('button')
        answerbutton.innerText = index.choices[i].choice
        answerbutton.classList.add('btn')
        answerbutton.classList.add('abtn')
        answerbutton.addEventListener("click", answerCheck)
        answerButtonsEl.appendChild(answerbutton)
    }
};


//check if answer is correct    
function answerCheck(event) {
    var selectedanswer = event.target
    if (arrayShuffledQuestions[QuestionIndex].a === selectedanswer.innerText) {
        answerCorrect()
        score = score + 7
    }

    else {
        answerWrong()
        score = score - 1;
        timeleft = timeleft - 3;
    };

    //go to next question, check if there is more questions
    QuestionIndex++
    if (arrayShuffledQuestions.length > QuestionIndex + 1) {
        setQuestion()
    }
    else {
        gameover = "true";
        showScore();
    }
}

//display correct! on screen
function answerCorrect() {
    if (correctEl.className = "hide") {
        correctEl.classList.remove("hide")
        correctEl.classList.add("banner")
        wrongEl.classList.remove("banner")
        wrongEl.classList.add("hide")
    }
}
//display wrong! on screen
function answerWrong() {
    if (wrongEl.className = "hide") {
        wrongEl.classList.remove("hide")
        wrongEl.classList.add("banner")
        correctEl.classList.remove("banner")
        correctEl.classList.add("hide")
    }
}


//Display total score screen at end of game
function showScore() {
    containerQuestionEl.classList.remove("show");
    containerQuestionEl.classList.add("hide");
    containerFinishEl.classList.remove("hide");
    containerFinishEl.classList.add("show");

    var scoreDisplay = document.createElement("p");
    scoreDisplay.innerText = ("Your final score is " + score + "!");
    containerScoreEl.appendChild(scoreDisplay);
}

//create high score values
function createHighScore(event) {
    event.preventDefault()
    var initials = document.querySelector("#initials").value;
    if (!initials) {
        alert("Enter your intials!");
        return;
    }

    formInitials.reset();

    var HighScore = {
        initials: initials,
        score: score
    }


    //push and sort scores
    HighScores.push(HighScore);
    HighScores.sort((a, b) => { return b.score - a.score });

    //clear visibile list to resort
    while (listHighScoreEl.firstChild) {
        listHighScoreEl.removeChild(listHighScoreEl.firstChild)
        //create elements in order of high scores
        for (var i = 0; i < HighScores.length; i++) {
            var highscoreEl = document.createElement("li");
            highscoreEl.ClassName = "high-score";
            highscoreEl.innerHTML = HighScores[i].initials + " - " + HighScores[i].score;
            listHighScoreEl.appendChild(highscoreEl);
        }
        break;
    }
    localStorage.setItem("HighScores", JSON.stringify(HighScores))
    displayHighScores();

}

//load values/ called on page load
function loadHighScore() {
    var LoadedHighScores = localStorage.getItem("HighScores")
    if (!LoadedHighScores) {
        return false;
    }

    LoadedHighScores = JSON.parse(LoadedHighScores);
    LoadedHighScores.sort((a, b) => { return b.score - a.score })


    for (var i = 0; i < LoadedHighScores.length; i++) {
        var highscoreEl = document.createElement("li");
        highscoreEl.ClassName = "high-score";
        highscoreEl.innerText = LoadedHighScores[i].initials + " - " + LoadedHighScores[i].score;
        listHighScoreEl.appendChild(highscoreEl);

        HighScores.push(LoadedHighScores[i]);

    }
}

//display high score screen from link or when intials entered
function displayHighScores() {

    containerHighScoresEl.classList.remove("hide");
    containerHighScoresEl.classList.add("show");
    gameover = "true"

    if (containerFinishEl.className = "show") {
        containerFinishEl.classList.remove("show");
        containerFinishEl.classList.add("hide");
    }
    if (containerStartEl.className = "show") {
        containerStartEl.classList.remove("show");
        containerStartEl.classList.add("hide");
    }

    if (containerQuestionEl.className = "show") {
        containerQuestionEl.classList.remove("show");
        containerQuestionEl.classList.add("hide");
    }

    if (correctEl.className = "show") {
        correctEl.classList.remove("show");
        correctEl.classList.add("hide");
    }

    if (wrongEl.className = "show") {
        wrongEl.classList.remove("show");
        wrongEl.classList.add("hide");
    }

}
//clears high scores
function clearScores(event) {
    event.preventDefault()
    console.log("Its runnnig")
    HighScores = [];

    while (listHighScoreEl.firstChild) {
        listHighScoreEl.removeChild(listHighScoreEl.firstChild);
    }

    localStorage.clear(HighScores);

}

loadHighScore()

