const quizDate = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '49',
        correct: 'c'
    }, {
        question: 'What is most used programming languge?',
        a: 'Java',
        b: 'Python',
        c: 'C++',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'Who id president of US?',
        a: 'Donald Trump',
        b: 'Jo Baiden',
        c: 'Florin Pop',
        d: 'Barak Obama',
        correct: 'b'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Languge',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    }, {
        question: 'What year was JavaScript launched?',
        a: '2013',
        b: '2005',
        c: '1995',
        d: 'none of the above',
        correct: 'c'
    }
];

const answersEls = document.querySelectorAll(".answer");
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

console.log(answersEls[0]);
loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizDate = quizDate[currentQuiz];

    questionEl.innerText = currentQuizDate.question;
    a_text.innerText = currentQuizDate.a;
    b_text.innerText = currentQuizDate.b;
    c_text.innerText = currentQuizDate.c;
    d_text.innerText = currentQuizDate.d;
}

function getSelected() {
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
            return answer;
        }
    })
    return answer;
};

function deselectAnswer() {
    answersEls.forEach(answerEl => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    
    if(answer){
        if(answer === quizDate[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if(currentQuiz < quizDate.length) {
            loadQuiz()
        }
        else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizDate.length} questions!</h2>
            <button onClick="location.reload()">Reload</button>`;
        }
    }
});
