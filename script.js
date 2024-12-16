// 1

let c = prompt('введите первое число');
let d = prompt('введите второе число');
if (c>d){
    console.log('первое число больше чем второе');
} else if (c<d){
    console.log('второе число больше чем первое');
} else{
    console.log('числа одинаковые');
}



// 2

let km = prompt('введите длину в километрах');
let fut = prompt('введите длину в футах');
let kmToMeters = km*1000;
let futToMeters = fut*3.05;
if (kmToMeters>futToMeters){
    console.log('длина в километрах больше, чем в футах');
} else if (kmToMeters<futToMeters){
    console.log('длина в футах больше, чем в километрах');
} else {
    console.log('длина равная');
}



// 3

let a = prompt('введите первое число');
let b = prompt('введите второе число');
if (a % b === 0){
    console.log('первое число является делителем второго');
} else if ( b % a === 0){
console.log('второе число является делителем первого');
} else{
    console.log('числа не являются делителями друг другу');
}

// 4


let qwe = prompt('введите число');
let rty = qwe % 10;
if (rty % 2 === 0){
    alert('число парное');
} else{
    alert('число непарное');
}

// 5

let qwe1 = prompt('введите двухзначное число');
let rty1 = qwe1 % 10;
let rty2 = (qwe1 - rty1)/10;
if (rty1>rty2){
    alert('вторая цифра больше первой');
} else {
    alert('первая цифра больше второй');
}

// 6

let qwe6 = prompt('введите трехзначное число');
let thirstNumber = qwe6 % 10;
let secondNumber = ((qwe6 - thirstNumber) / 10) % 10;
let firstNumber = Math.floor(qwe6/100);
if ((firstNumber + secondNumber + thirstNumber) % 10 == 0){
    console.log('сумма чисел парные');
} else{
    console.log('сумма чисел не парные');
}
if((firstNumber + secondNumber + thirstNumber) % 5 == 0){
    console.log('сумма чисел кратные пяти');
} else{
    console.log('сумма чисел не кратные пяти');
}
if ((firstNumber * secondNumber * thirstNumber) > 100 ){
    console.log('произведение чисел больше ста');
} else{
    console.log('произведение чисел не больше ста');
}

// 7

let qwe7 = prompt('введите трехзначное число');
let firstNumber7 = Math.floor(qwe7/100);
let secondNumber7 = Math.floor(qwe7/10) % 10;
let thirstNumber7 = qwe7 % 10;
if(firstNumber7 == secondNumber7 == thirstNumber7){
    alert('все цифры одинаковые');
} else{
    alert('цифры не одинаковые');
}
if(firstNumber7 == secondNumber7 || firstNumber7 == thirstNumber7 || secondNumber7 == thirstNumber7){
    alert('есть одинаковые цифры');
} else{
    alert('цифры не одинаковые');
}


// 1.1

let userAge = prompt('рік вашого народження');
if (userAge == Number(userAge)){
    alert(`${2024 - userAge}`);
} else{
    alert('Шкода, що ви не захотіли ввести свій вік');
}
let userCity = prompt('в якому місті ви живете?');    
if (userCity == ['Київ'|| 'Вашингтон' || 'Лондон']){
    alert(`Ти живеш у столиці ${userCity}`);
} else if(userCity == String(userCity)){
    alert(`Ти живеш в місті ${userCity}`);
} else {
    alert('Шкода, що ви не захотіли ввести назву свого міста');
}
let userSport = prompt('який твій улюблений вид спорту?');
let sport = {рестлінг: 'Андертейкером', футбол: 'Андрієм Шевченко', бокс: 'Ленноксом Льюінсом'}
    if(sport[userSport]){
        alert(`Круто! Хочеш стати ${sport[userSport]}?`);
    }   else if(userSport == String(userSport)){
        alert(`Твій улюблений вид спорта ${userSport}`);
    } else {
        alert('Шкода, що ви не захотіли ввести свій улюбдений вид спорту');
    }