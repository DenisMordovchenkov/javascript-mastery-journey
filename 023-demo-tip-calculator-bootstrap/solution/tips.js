const TIPS = 0.1;
let amountOfPeople = parseInt(prompt('На сколько человек следует разделить счёт: '));
let bill = parseFloat(prompt('Укажите сумму счёта: '));

let billPerPerson = (bill / amountOfPeople);

let tipsPerPerson = TIPS * billPerPerson

alert(`Каждый должен оплатить по счёту - ${parseInt(billPerPerson)} и по ${parseInt(tipsPerPerson)} - на чай`)
