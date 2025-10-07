let points = 0;
let question1, question2, question3, question4, question5, question6;
const NAME = (prompt('Введите ваше имя: '));
let header = document.createElement('div');
if (NAME && (confirm('Предлагаю сыграть в игру. Отвечайте на вопросы - зарабатывайте очки. Поехали?'))) {
    header.innerHTML = `<h1>Привет, ${NAME}</h1>`;
    document.querySelector('.container').appendChild(header);
    question1 = prompt('JavaScript это самостоятельный язык или библиотека скриптов языка Java?[Самостоятельный][Библиотека]')
    if (question1 == 'Самостоятельный') {
        points += 10
        let section1 = document.createElement('p')
        section1.innerHTML = `JavaScript это самостоятельный язык или библиотека скриптов языка Java?
Правильный ответ - Самостоятельный. Всего очков: ${points}
`
        document.querySelector('.answers').appendChild(section1)

    }
    question2 = prompt('Какой тип данных НЕ является примитивным в JavaScript?[boolean][float]')
    if (question2 == 'float') {
        points += 10
        let section2 = document.createElement('p')
        section2.innerHTML = `Какой тип данных НЕ является примитивным в JavaScript?
Правильный ответ - float.Всего очков: ${points}
`
        document.querySelector('.answers').appendChild(section2)

    }
    question3 = prompt('Какой метод не существует в JavaScript для вывода данных?[print][document.write]')
    if (question3 == 'print') {
        points += 10
        let section3 = document.createElement('p')
        section3.innerHTML = `Какой метод не существует в JavaScript для вывода данных?
Правильный ответ - print. Всего очков: ${points}
`
        document.querySelector('.answers').appendChild(section3)

    }
    question4 = prompt('Какой оператор используется для присваивания значений в JavaScript?[=][===]')
    if (question4 == '=') {
        points += 10
        let section4 = document.createElement('p')
        section4.innerHTML = `Какой оператор используется для присваивания значений?
Правильный ответ - =. Всего очков: ${points}
`
        document.querySelector('.answers').appendChild(section4)

    }
    question5 = prompt('Что вернет "typeof null"?[object][undefined]')
    if (question5 == 'object') {
        points += 10
        let section5 = document.createElement('p')
        section5.innerHTML = `JavaScript это самостоятельный язык или библиотека скриптов языка Java?
Правильный ответ - object. Всего очков: ${points}
`
        document.querySelector('.answers').appendChild(section5)

    }
    question6 = prompt('Какого управляющего оператора нет в JavaScript?[loop][switch]')
    if (question6 == 'loop') {
        points += 10
        let section6 = document.createElement('p')
        section6.innerHTML = `Какого управляющего оператора нет в JavaScript?
Правильный ответ - loop. Всего очков: ${points}
`
        document.querySelector('.answers').appendChild(section6)

    }
} else if (NAME && !(confirm('Предлагаю сыграть в игру. Отвечайте на вопросы - зарабатывайте очки. Поехали?'))) {
    header.innerHTML = `<h1>Пока, ${NAME}</h1>`;
    document.querySelector('.container').appendChild(header);
} else {
    alert('Ну что ж. Как-нибудь в другой раз!')
    header.innerHTML = `<h1>Пока, незнакомец!</h1>`;
    document.querySelector('.container').appendChild(header);
}

if (points === 0) {
    let section1 = document.createElement('p')
    section1.innerHTML = `К сожалению вы не дали ни одного верного ответа!`
    document.querySelector('.answers').appendChild(section1)
}

if (points == 60) {
    let section7 = document.createElement('p')
    section7.innerHTML = `Да вы гуру JavaScript. Нам надо у вас поучиться!`
    document.querySelector('.answers').appendChild(section7)
}


