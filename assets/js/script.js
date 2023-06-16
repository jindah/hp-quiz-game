const question = document.querySelector('#question');
const choises = Array.from(document.querySelectorAll('.answer-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What is the full name of Hogwarts' headmaster?",
        choice1: "Albus Dumbledore",
        choice2: "Minerva McGonagall",
        choice3: "Severus Snape",
        choice4: "Horace Slughorn"
    },
    {
        question: "In which year was the first Harry Potter book released?",
        choice1: "1995",
        choice2: "1997",
        choice3: "2001",
        choice4: "2003"
    },
    {
        question: "What is the name of the forbidden book Hermione uses in Harry Potter and the Chamber of Secrets?",
        choice1: "Secret History",
        choice2: "The Mysteries of Growing Plants",
        choice3: "Auntie's Magical Recipes",
        choice4: "The Monster Book"
    },
    {
        question: "What is Harry Potter's full name?",
        choice1: "Harry James Potter",
        choice2: "Harry Sirius Potter",
        choice3: "Harry Albus Potter",
        choice4: "Harry Lily Potter"
    },
    {
        question: "Which magical creature represents the Ravenclaw house?",
        choice1: "An eagle",
        choice2: "A wolf",
        choice3: "A lion-snake",
        choice4: "A griffin"
    },
    {
        question: "What is the incantation used to produce a Patronus?",
        choice1: "Expecto Patronum",
        choice2: "Avada Kedavra",
        choice3: "Crucio",
        choice4: "Wingardium Leviosa"
    },
    {
        question: "What is the broomstick Harry Potter uses during his first Quidditch match?",
        choice1: "Nimbus 2000",
        choice2: "Firebolt",
        choice3: "Cleansweep Seven",
        choice4: "Comet 260"
    },
    {
        question: "Which character performs the 'Bat-Bogey Hex'?",
        choice1: "Hermione Granger",
        choice2: "Luna Lovegood",
        choice3: "Ginny Weasley",
        choice4: "Molly Weasley"
    },
    {
        question: "What is the challenge that Harry, Ron, and Hermione face in the Philosopher's Stone that tests their knowledge of magical creatures?",
        choice1: "Death's Challenge",
        choice2: "Dragon's Challenge",
        choice3: "Gargoyle's Challenge",
        choice4: "Ghost's Challenge"
    },
    {
        question: "Which ancestor founded the Slytherin house?",
        choice1: "Godric Gryffindor",
        choice2: "Salazar Slytherin",
        choice3: "Rowena Ravenclaw",
        choice4: "Helga Hufflepuff"
    },
    {
        question: "What is the magical number required to open the gates to Diagon Alley?",
        choice1: "7-3-5",
        choice2: "3-7-9",
        choice3: "2-4-6",
        choice4: "9-3-6"
    },
    {
        question: "What is the name of the dark wizard who keeps a snake as a pet and leads the Death Eaters?",
        choice1: "Lucius Malfoy",
        choice2: "Antonin Dolohov",
        choice3: "Fenrir Greyback",
        choice4: "Bellatrix Lestrange"
    }
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 6;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...question];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.localStorage.assign('/end.html');
    };

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${questionCounter / MAX_QUESTIONS) * 100;
}% `;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choises.forEach(choise => {
        const number = choise.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]
    })
};