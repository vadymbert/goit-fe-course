'use strict';
let userInput;
const numbers = [];
let num;
let sum = 0;

do {
  userInput = prompt("Введите число.");
  if (userInput === null || userInput === "") {
    console.log(userInput);
    break;
  }

  num = Number(userInput);

  if (!Number.isNaN(num)) {
    numbers.push(num);
  } else {
    alert("Было введено не число, попробуйте еще раз.");
  }
} while (userInput !== null);

for (let i = 0, max = numbers.length; i < max; i += 1) {
  sum += numbers[i];
}

if(numbers.length > 0) {
  alert(`Общая сумма чисел равна ${sum}`);
}
