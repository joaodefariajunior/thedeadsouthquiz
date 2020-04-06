const questions = [{
    question: 'The Dead South was formed in ?',
    answers: [{
            text: 'Ontario',
            correct: false
        },
        {
            text: 'Quebec',
            correct: false
        },
        {
            text: 'Regina',
            correct: true
        },
        {
            text: 'Halifax',
            correct: false
        }
    ]
}, {
    question: 'Danny Kenyon is not originally from Canada ,where is he from ?',
    answers: [{
            text: 'Costa Rica',
            correct: false
        },
        {
            text: 'Brazil',
            correct: true
        },
        {
            text: 'Mexico',
            correct: false
        },
        {
            text: 'Malta',
            correct: false
        }
    ]
}, {
    question: 'I dont feel no more ...I just want ... ?',
    answers: [{
            text: 'Run away!',
            correct: false
        },
        {
            text: 'Die!',
            correct: false
        },
        {
            text: 'lay down and sleep!',
            correct: false
        },
        {
            text: 'liquor and dirty whores',
            correct: true
        }
    ]
}, {
    question: 'Danny had to leave the group for a while, who replaced him ?',
    answers: [{
            text: 'Erik Mehlsen',
            correct: true
        },
        {
            text: 'Eliza Mary Doyle',
            correct: false
        },
        {
            text: 'Steven Yung',
            correct: false
        },
        {
            text: 'None of the above',
            correct: false
        }
    ]
}, {
    question: 'The Band appeared on the Billboard music chart , which position?',
    answers: [{
            text: '35',
            correct: false
        },
        {
            text: '102',
            correct: false
        },
        {
            text: '47',
            correct: false
        },
        {
            text: '50',
            correct: true
        }
    ]
}, {
    question: 'Colton practices martial arts ,which one?',
    answers: [{
            text: 'Kung Fu',
            correct: false
        },
        {
            text: 'MMA',
            correct: false
        },
        {
            text: 'BJJ ',
            correct: true
        },
        {
            text: 'Tae Kwon Do',
            correct: false
        }
    ]
}, {
    question: 'Their biggest hit video is ?',
    answers: [{
            text: 'Boots',
            correct: false
        },
        {
            text: 'Bastard Son!',
            correct: false
        },
        {
            text: 'The Dead South',
            correct: false
        },
        {
            text: "in Hell I'll be in good company",
            correct: true
        }
    ]
}, {
    question: 'Their first record deal was with Devil Duck Records,a label from where?',
    answers: [{
            text: 'Canada',
            correct: false
        },
        {
            text: 'Germany',
            correct: true
        },
        {
            text: 'USA',
            correct: false
        },
        {
            text: 'Italy',
            correct: false
        }
    ]
}, {
    question: 'Nate and Danny played together in a band...which style they played ?',
    answers: [{
            text: 'country',
            correct: false
        },
        {
            text: 'Punk Rock',
            correct: false
        },
        {
            text: 'Heavy Metal',
            correct: false
        },
        {
            text: 'Grunge',
            correct: true
        }
    ]
},  {
    question: 'Due to the outfits the band wears , they got a nickname .... ?',
    answers: [{
            text: 'The Amish Mafia',
            correct: true
        },
        {
            text: 'The Beardos',
            correct: false
        },
        {
            text: 'Bluegrass Mafia',
            correct: false
        },
        {
            text: 'The Bastards sons',
            correct: false
        }
    ]
}, {
    question: 'Colton had to quit the band ,because .... ?',
    answers: [{
            text: 'Insomnia and exhaustion ',
            correct: true
        },
        {
            text: 'He became a father',
            correct: false
        },
        {
            text: 'Carpo Tunnel Syndrom',
            correct: false
        },
        {
            text: 'Ulcera',
            correct: false
        }
    ]
}, {
    question: "The group is Known for their hats ,Nate's hat is a  ?'",
    answers: [{
            text: 'Fedora',
            correct: false
        },
        {
            text: 'Explorer',
            correct: false
        },
        {
            text: 'Black Vaquero',
            correct: true
        },
        {
            text: 'Amish Shepperd',
            correct: false
        }
    ]
}, ]


const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('quiz-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
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

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}