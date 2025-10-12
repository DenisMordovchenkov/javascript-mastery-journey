let rangeValue = document.getElementById('rangeValue');
let input = document.getElementById('tipsRange');
let tipsInputValue = input.value;

input.addEventListener('input', (e) => {
    rangeValue.textContent = `Чаевые ${e.target.value}%`;
    tipsInputValue = e.target.value;
});
let personsInput = document.getElementById('persons');
let personsInputValue;
personsInput.addEventListener('input', (e) => {
    personsInputValue = e.target.value;
});
let billInput = document.getElementById('bill');
let billInputValue;
billInput.addEventListener('input', (e) => {
    billInputValue = e.target.value;
});

let textBill = document.getElementById('textBill');
let textTips = document.getElementById('textTips');

let countButton = document.getElementById('countButton');
countButton.addEventListener('click', () => {
    if (personsInputValue < 1 || billInputValue <= 0) {
        textBill.textContent = `Количество человек не может быть меньше 1, а сумма счета 0 или меньше`
        textTips.textContent = ''
    } else if (personsInputValue === undefined || billInputValue === undefined) {
        textBill.textContent = `Вы должны указать количество человек и сумму счёта`
        textTips.textContent = ''
    }

    else {
        textBill.textContent = `Сумма счёта по ${Math.round(billInputValue / personsInputValue)} руб. на каждого`;
        textTips.textContent = `Чаевых по ${Math.ceil((tipsInputValue / 100) * billInputValue / personsInputValue)} руб. с человека`;
    }

})


