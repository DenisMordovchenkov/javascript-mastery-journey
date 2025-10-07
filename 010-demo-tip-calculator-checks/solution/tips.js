const TIPS = 0.1;
let amountOfPeople = parseInt(prompt('На сколько человек следует разделить счёт: '));
let bill = parseFloat(prompt('Укажите сумму счёта: '));
let billPerPerson;
let tipsPerPerson;
if (!isNaN(amountOfPeople) && !isNaN(bill)) {
    billPerPerson = (bill / amountOfPeople);
    tipsPerPerson = TIPS * billPerPerson;

    alert(`Каждый должен оплатить по счёту: ${parseInt(billPerPerson)} kudos и по: ${parseInt(tipsPerPerson)} kudos на чай`);

} else {
    alert('Можно вводить только числа')
};


