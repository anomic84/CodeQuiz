const startButton = document.getElementById('start-button')
const questionContainerElement = document.getElementById('questions-section')
const mainContainerElement = document.getElementById('main-container')
const questionElement = document.getElementById('questiond')
const answerButtonsElement = document.getElementById('answer-button')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)

// Start the quiz function
function startQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    // change from intro to questions
    mainContainerElement.classList.remove('hide')
    questionContainerElement.classList.remove('hide')
    // setNextQuestion()
}


// Start timer


// next question function
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('abtn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }

}


const questions = [
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '14', correct: false },
            { text: 'bloo', correct: false },
        ]
    }
]
// answer right funtion (maybe inside each questions function)
// answer wrong funtion (maybe inside each questions function)

// last question function to change to finish



// enter highscore function
//Go back function
//



//highscore button function at intro



