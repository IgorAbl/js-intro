const a = 2;
const b = 3;
console.log('a * b :>> ', a * b);
const c = 6;
const d = 2;
console.log('c / d :>> ', c / d);
const e = 2;
const f = 3;
console.log('e + f :>> ', e + f);
const g = 11;
console.log('g :>> ', g);
const h = true;
console.log('h :>> ', h);
const i = 'java script'
console.log('i :>> ', i);
const j = 100
console.log('j :>> ', j);

let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num += 1;
num -= 1;

let value1 = prompt("ВВедите число:");
let newvalue1 = Number(value1) ** 2;
alert('Ваше число возвденное в квадрат = ' + newvalue1);

let value2 = prompt("ВВедите первое число:");
let value3 = prompt("ВВедите второе число:");
let newvalue2 = (Number(value2) + Number(value3)) / 2;
alert('Среднее арифмитическое = ' + newvalue2);

let value4 = prompt("ВВедите минуты:");
let newvalue3 = Number(value4) * 60;
alert('Всего секунд: ' + newvalue3);

const greeting = 'Hello ';
let userName = prompt('Введите Ваше имя:');
alert(greeting + userName);

const value5 = prompt('Введите число:');
if (value5 === '10') {
    alert('Верно!');
} else {
    alert('Не верно!');
}


const test = prompt('Введите значение:');
if (test === 'true') {
    alert('Верно!');
} else {
    alert('Не верно!');
}
if (test === 'true') {
    alert('Нe верно!');
} else {
    alert('Верно!');
}

const value6 = prompt('Введите сумму покупки:');
if (value6 > 500 && value6 <= 800) {
    let newvalue6 = value6 / 100 * 97;
    alert('Сумма с учетом скидки = ' + newvalue6);
} else {
    if (value6 > 800) {
        let newnewvalue6 = value6 / 100 * 95;
        alert ('Сумма с учетом скидки = ' + newnewvalue6);
    } 
    alert('Скидка не предоставляется');
}

let k = 25;
while (k >= 0){
    console.log(k);
    --k;
}

for (let l = 10; l <= 50; l = l + 5){
    console.log('l:>> ', l);
}


let m = 1;
let result2 = 0;

while (m <= 100) {
  result2 = result2 + m;
  m++;
}
console.log('result2 :>> ', result2);


const wantedValue = 6;
let value;

do {
  value = Number(prompt("Решите пример 2 + 2 * 2 ="));
} while (value !== wantedValue);