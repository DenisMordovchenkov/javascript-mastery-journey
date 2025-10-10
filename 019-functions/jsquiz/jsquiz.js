//Переменная для подсчета и хранения очков
let points = 0;
let isAborted = false;
const NAME = (prompt('Введите ваше имя: '));
//Массив с вариантами вопросов
const questions = [`JavaScript это самостоятельный язык или библиотека скриптов языка Java?`,
    `Какой тип данных НЕ является примитивным в JavaScript?`,
    'Какой метод НЕ существует в JavaScript для вывода данных?',
    'Какой оператор используется для присваивания значений?',
    `Что вернет "typeof null"?`,
    'Какого управляющего оператора нет в JavaScript?'
]
//Массив с вариантами ответов
const answers = [['самостоятельный', 'библиотека'], ['boolean', 'float'], ['print', 'document.write'], ['=', '==='], ['null', 'object'], ['loop', 'switch']];

let drawSomeText = function (what, whereToDraw, element) {
    let elem = document.createElement(element);
    elem.innerHTML = `${what}`;
    document.querySelector(whereToDraw).appendChild(elem);
};

let drawQuestion = function (element, question, answers, rAnswer) {
    userAnswer = (prompt(`${question}. [${answers}]`))
    if (userAnswer === null) {
        isAborted = true
        drawSomeText(`Пока, ${NAME}. Всего заработано очков - ${points}`, '.container', 'div')
    } else if (userAnswer.toLowerCase() == rAnswer) {
        points += 10
        let e = document.createElement(element)
        e.innerHTML = `Правильный ответ, ${NAME}. Всего очков - ${points} `
        document.querySelector('.answers').appendChild(e)
    } else {
        drawSomeText(`Неверно, ${NAME}. Верный ответ был - ${rAnswer}`, '.answers', 'p')
    }

};

if (NAME && (confirm(`${NAME}, предлагаю сыграть в игру. Отвечайте на вопросы - зарабатывайте очки. Поехали?`))) {
    //При условии согласия и ввода имени отрисовываем приветствие и задаем вопросы
    if (isAborted) drawSomeText(`Привет, ${NAME}`, '.container', 'div')
    if (!isAborted) drawQuestion('p', questions[0], answers[0], answers[0][0])
    if (!isAborted) drawQuestion('p', questions[1], answers[1], answers[1][1])
    if (!isAborted) drawQuestion('p', questions[2], answers[2], answers[2][0])
    if (!isAborted) drawQuestion('p', questions[3], answers[3], answers[3][0])
    if (!isAborted) drawQuestion('p', questions[4], answers[4], answers[4][1])
    if (!isAborted) drawQuestion('p', questions[5], answers[5], answers[5][0])

    if (points === 0) {
        //Если нет ни одного верного ответа, проверка по количеству очков
        drawSomeText(`К сожалению вы не дали ни одного верного ответа!`, '.answers', 'p')
    }

    if (points == 60) {
        //Если все ответы верны
        drawSomeText('Да вы гуру JavaScript. Нам надо у вас поучиться!', '.answers', 'p')
    }
} else if (NAME && !(confirm(`${NAME}, предлагаю сыграть в игру. Отвечайте на вопросы - зарабатывайте очки. Поехали?`))) {
    //При отказе от игры и ввода имени - прощаемся по имени
    drawSomeText(`Пока, ${NAME}`, '.container', 'p')

    drawSomeText('Ну что ж. Как-нибудь в другой раз!', '.container', 'p')
} else {
    //Прощаемся без имени
    drawSomeText('Пока, незнакомец!', '.container', 'p')

    drawSomeText('Ну что ж. Как-нибудь в другой раз!', '.container', 'p')

}




