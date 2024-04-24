const quizData = [
    {
        question: "Чемпион какой спортивной дисциплины Виктор Александрович Немков?",
        a: "Смешенные единоборства",
        b: "Плавание",
        c: "Шахматы",
        correct: "a",
        d: "Виктор Александрович Немков (род. 26 января 1987) — российский профессиональный боец смешанного стиля и самбист. Бывший чемпион M-1 Challenge в полутяжёлом весе, чемпион мира по боевому самбо, чемпион и призёр чемпионатов России, победитель Кубка Мира."
    },
    {
        question: "Кто такая Светлана Хоркина?",
        a: "Актриса",
        b: "Гимнастка",
        c: "Писательница",
        correct: "b",
        d: "Светлана Васильевна Хоркина (род. 19 января 1979, Белгород) — российская гимнастка, двукратная олимпийская чемпионка в упражнениях на брусьях (1996, 2000)."
    },
    {
        question: "Где родился М.С. Щепкин?",
        a: "с. Красное (Алексеевка)",
        b: "г. Курск",
        c: "с. Верхняя Ольховка",
        correct: "a",
        d: "Щепкин Михаил Семенович (с. Красное Обоянского уезда Курской губернии) — русский актер. Основоположник реализма в русском сценическом искусстве. Великий реформатор русской сцены. Родисля в семье крепостного, управляющего имениями графа Г. С. Волькенштейна. "
    },
    {
        question: "Какой премии удостоился Владимир Григорьевич Шухов?",
        a: "Премии Дарвина",
        b: "Нобелевской Премии",
        c: "Премии В.И Ленина",
        correct: "c",
        d: "Владимир Григорьевич Шухов (28 августа 1853 — 2 февраля 1939) — русский и советский инженер, архитектор, изобретатель, учёный. Член-корреспондент (1928) и почётный член (1929) Академии наук СССР, лауреат премии имени В. И. Ленина (1929), Герой Труда."
    },
    {
        question: "Чем управлял Василий Яковлевич Горин?",
        a: "Горно-обогатительным комбинатом",
        b: "Колхозом",
        c: "Мясокомбинатом",
        correct: "b",
        d: "Василий Яковлевич Горин (9 января 1922 — 4 апреля 2014) — организатор колхозного производства, председатель ордена Трудового Красного Знамени колхоза имени Фрунзе Белгородской области. Дважды Герой Социалистического Труда (1971, 1985). Почётный гражданин Белгородской области."
    },
    
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
    
    answerElements.forEach(answerEl => answerEl.checked = false)
} 

function setDisabled(disabled){

    answerElements.forEach(answerEl => answerEl.disabled = disabled)

}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

let isShowingAnswer = false

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        

        if(isShowingAnswer){isShowingAnswer = false}else{isShowingAnswer = true}

        if (isShowingAnswer){
            submit.innerText = "ПРОДОЛЖИТЬ"
            setDisabled(true)
            questionElement.innerText = quizData[currentQuiz].d
        }
        else {
            submit.innerText = "Ответ"
            setDisabled(false)
            if(answer === quizData[currentQuiz].correct){
                score++;
            }
            currentQuiz++;
            if(currentQuiz < quizData.length){
                
                loadQuiz();
            }
            else{
            quiz.innerHTML = `<h2>Ваш счёт: ${score}/${quizData.length} </h2>
            <button onclick="location.reload()">Пройти заново</button>
            `;
            }
        }
    }
});