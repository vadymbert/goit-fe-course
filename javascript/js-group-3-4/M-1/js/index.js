'use strict';
/*Модуль-1 задание-1
  Есть две переменые a и b содержащие цифры 5 и 10,
  и переменная result в которую надо записать результат
  математических операций над a и b.

  Используя синтаксис языка, последовательно присвоить
  в result результат выполнения мат операций над a и b
  так, чтобы в консоли результат совпадал с комментарием
  напротив console.log()
*/
// // const a = 6;
// const b = 10;
// let result;

// result = a + b;
// console.log(result); // 16
// result = a % b;
// console.log(result); // 6
// result = a * b;
// console.log(result); // 60
// result = a / b;
// console.log(result); // 0.6
// result = b % a;
// // console.log(result); // 4

/*Модуль-1 задание-2
  Есть три переменные содержащие день, месяц, и год.
  Необходимо получить строку день/месяц/год
  в формате xx/xx/xxxx

  Найдите ошибку в записи значания для переменной date,
  результат будет выведен в консоль и равен комментарию
  напротив console.log()
*/

// const day = 2;
// const month = 10;
// const year = 2017;
// const date = day + '/' + month + '/' + year;

// console.log(date); // 02/10/2017
//*Модуль-1 задание-3
//   Создать переменную message, в которую записать строку
//   результата запроса ввода пользователя (prompt)

//   Затем для переменной inLowerCase надо присвоить
//   результат вызова метода обработки строки message так,
//   чтобы все символы строки были в нижнем регистре.

//   Для переменной inUpperCase - в верхнем регистре.
// */

// // Заменить '' на message и вызов метода
// let inLowerCase = '';
// let inUpperCase = '';
//const message = prompt('Welcome to Bahamas!', '');
//console.log( message.toLowerCase() );
//console.log( message.toUpperCase() );
/*Модуль-1 задание-4
Есть две переменные, name и typingSpeed
  содержащие имя пользователя и скорость печати,
  кол-во знаков в минуту.

  Используя шаблонные строки необходимо записать
  в перменную message сообщение формата:
  "имя пользователя" печатает со скоростью "скорость печати" знаков в минуту.

  Найти ошибки в коде и исправить их, при верном решении
  в консоль будет выведена строка идентичная той что напротив console.log


const name = 'Mango';
const typingSpeed = 50;

const message = `${name} печатает со скоростью ${typingSpeed} знаков в минуту.`;

console.log(message); // Mango печатает со скоростью 50 знаков в минуту.
/*
/*Модуль-1 задание-5
*
  Есть 3 переменные в которых хранится  размер
  составляющих блочной модели в формате Npx,
  где N это целое число.

  Используя эти переменные, запишите в
  переменную totalWidth общую ширину
  блока в формате Npx.

  К примеру "сумма" '20px' и '30px' будет равна '50px'.

  Если все верно, то в консоли будет выведена строка '125px'
*/

//const padding = "20px";
//const border = "5px";
//const contentWidth = "100px";

//let totalWidth = Number.parseInt(padding) + Number.parseInt(border) + Number.parseInt(contentWidth);

//console.log(totalWidth); // '125px'
/*Модуль-1 задание-6
  Есть 3 переменные в которых хранится  размер
  составляющих блочной модели в формате Npx,
  где N это число с плавающей запятой.

  Используя эти переменные, запишите в
  переменную totalWidth общую ширину
  блока в формате Npx.

  К примеру "сумма" '20.20px' и '30.25px'
  будет равна '50.45px'.

  Если все верно, то в консоли будет
  выведена строка '125.85px'
*/

/*const padding = "20.25px";
const border = "5.15px";
const contentWidth = "100.45px";

let totalWidth = Number.parseFloat(padding) + Number.parseFloat(border) + Number.parseFloat(contentWidth);;

console.log(totalWidth); // '125.85px'*/
/*Модуль-1 задание-7
  Число участников лотореи 250 человек.

  Переменной winner присвойте результат выражения,
  на основе Math.random, которое вернет
  целое число от 1 до 250 включительно.
*/
/*let winner = Number.parseInt(Math.random ()*250);
console.log(`Победитель является обладателем номера ${winner}!`);*/
/* Модуль-1 задание-8
  В переменную num записывается случайное число

  Используя ветвления запишите в переменную type
  строку "even" если num четное, и "odd" если не четное.
*/

/*const num = Number.parseInt(Math.random() * 100);

let type = ;

console.log(`${num} is ${type}`);*/

// const name = prompt('Plz enter your name', '');

// const message = 'Welcome ' + name;

// console.log(message);

// const message = 'WELCOME';

// const inLowerCase = message.toLowerCase();

// console.log( inLowerCase );

// console.log(message);

// console.log( 'hello'.toUpperCase() );

// const message = 'Welcome to hell to!'

// console.log( message.includes('to') );

// console.log( message.lastIndexOf('to') );

// const name = 'Mango';

// const mood = 'happy';

// const message = name + ' is ' + mood;

// 'Mango is happy'

// console.log(message);

// console.log( 5 + 5 + '2'  ); // '102'

// const margin = '15usd';

// console.log( Number.parseInt(margin) );

// console.log( Number.parseFloat(margin) );

// const str = Number('5qwe');

// 5 + 2
// +2

// NaN - Not a Number
// console.log(str);

// const age = Number(prompt('get age', ''));

// console.log(age);

// console.log( Number.isNaN(age) );

// console.log( typeof age === "number" );

// const a = 0.27;
// const b = 0.34;
// const a = 0.17;
// const b = 0.24;
// const value = (a * 100 + b * 100) / 100;
//console.log(value);
// console.log(Math.random()*10);

// const message = 'I\'m \\ happy!';

// console.log(message);

// const type = typeof 5;

// "number"
// "string"
// "boolean"
// "undefined"

// console.log('Variable type: ', type);

// const userName = 'Mango';

// alert('Привет' + userName);

// const userAge = prompt('Введите ваш возраст!', '');

// const x = 5 + 2 * 10;

// console.log(x);

// console.log(typeof userAge);

// const isGoing = confirm('Вы хотите поехать на шашлыки?');

// console.log(isGoing);

// const isActive = false;

// const hasChildren = true;

// runtime время исполнения

// let userAge = 18;

// console.log(userAge);

// userAge = 19;

// console.log(userAge);

// const name = 'Mango';

// console.log(name);

// имя-объекта.метод(параметры)
// console.log('user age: ', userAge);

// console.log(inLowerCase);
// console.log(inUpperCase);
// const message = 'WELCOME';

// const inLowerCase = message.toLowerCase();

// console.log( inLowerCase );

// console.log(message);
/*let message = prompt('Welcom');
console.log(message);
let inLowerCase = 'message';
let inUpperCase = 'message';
console.log(inLowerCase);
console.log(inUpperCase)
const name = 'Mango';
const typingSpeed = 50;

const message = '{Mango} печатает со скоростью [typingSpeed] знаков в минуту.`;

console.log(message); // Mango печатает со скоростью 50 знаков в минуту*/

//qeqqwrer
/*
коментарии
*/
//var userAge = 18;
//console.log( 'user age', userAge);
/*
обьявление переменных
*/
/*старая запись */
//var userAge;
//userAge = 18;
//console.log( 'user age', userAge);
/*переменняф кот можно перезаписать*/
//let userAge = 18;
//console.log(userAge);
//userAge = 19;
//console.log(userAge);
/*
постаянная например имя
*/
//const name = 'Mango';/*сразу инициализировать*/
//console.log(name);
/*хостинг, компелятор поднимает переменную, ТОЛЬКО ДЛЯ var */

/*let a = 5;
console.log(a);
a = 'qerqrq';
console.log(a);
let number = 5.3;/*число */
/*console.log(number);
let name = 'Mango';
console.log(name);
const isActive = true;
//alert('Привет');
//console.log('Привет');/*ввод данніх */
//const userAge = prompt('Введите ваш возраст', 'qeqrqwerqr');/*Возвращает строку*/
//console.log(userAge);
//const isGoing = confirm('Вы хотите на шашлыки');
//console.log( typeof isGoing);

/**матемматика */
/**const x = 10;
const y = 5;
let result;
result = x + y;
console.log(result);*/
//const result = 5 !== '5';/*НЕСТРОГОЕ сравнение ==, не использовать!!! используем === и !==*/
//console.log(result);
//const str = Number('5eee');
//console.log(str);/*NAN нельзя страку преобразовать в число */
//const age = Number(prompt('get age', ''));
//console.log(age);
//const margin = '15px';
//console.log( Number.parseInt(margin));
/*-----------------------Модуль 1-2------------------------------------ */
/*
  Приведение к логическому типу
  Запомните 7 ложных ( falsy) значений,
  приводящих к false :
  0, -0, NaN, null, undefined,
  пустая строка: "" или '', false
*/

// const bool = Boolean('0');

// console.log(bool);

/*
  Логические операторы: И - &&, ИЛИ - ||, НЕ - !
  ---------------10-----------------30---------------
*/

// const num = 15;

// const isInRange = num >= 10 && num <= 30;/*Логическое "И" до первого fals*/

// const isInRange = num <= 10 || num >= 30;/*Логическое "ИЛИ" до первого true*/

// console.log(isInRange);
// const val = !true; /*логическая нет */

// console.log(val);

// const num = Number(prompt('enter a number!'));

// const isNotValidNumber = !Number.isNaN(num);

// console.log(isNotValidNumber);

/*
  Ветвление - это возможность выполнить ту или
  иную последовательность кода в зависимости от
  условия. В JavaScript условие может быть любым,
  но результат проверки условия всегда имеет два
  значения - true или false.
  https://habrahabr.ru/post/74330/
  http://www.its.kpi.ua/itm/tkot/Students/Lec2_3_Acvitity[p].pdf
*/

// Получить от пользователя число,
// и проверить входит ли оно в идапазон от 10 до 30
// вывести лог с результатом

// ---------------10-----------------30---------------

// const num = Number(prompt('введите число от 10 до 30'));

// const isInRange = num >= 10 && num <= 30;

// if (isInRange) {
// console.log('Отлично! число подходит!');/*Общая запись оператора if если ДА*/
// } else {
//  console.log('Все плохо! число не подходит!');/*Общая запись else если нет*/
// }

// кофе продаем, разные размеры стаканов

// const SIZE_SMALL = 0;
// const SIZE_MEDIUM = 1;
// const SIZE_LARGE = 2;

// const input = Number(prompt('0 - small, 1 - medium, 2 - large', 1));

// if (input === SIZE_SMALL) {
// console.log('готовим маленький кофе');
// } else if (input === SIZE_MEDIUM) {
//  console.log('готовим средний кофе');
// } else if (input === SIZE_LARGE) {
// console.log('готовим большой кофе');
// } else {
// console.log('такого кофе нет');
// }

// попросить у пользователя число
// если оно больше 10 записать в переменную
// message строку 'ура, больше 10!'
// в противном случае, все плохо!

//  const input = Number(prompt('введите число больше 10'));

//  let message = input > 10 ? 'ура, больше 10!' : 'все плохо!';/*Тернарный оператор */

//  if (input > 10) {
//    message = 'ура, больше 10!';
//  } else {
//    message = 'все плохо!';
//  }

//  alert(message);

// кофе продаем, разные размеры стаканов
/**--------------------------------------------ПРИМЕР------------------------------------* */

// const SIZE_SMALL = 0;
// const SIZE_MEDIUM = 1;
// const SIZE_LARGE = 2;

// const coffeeSize = Number(prompt('0 - small, 1 - medium, 2 - large', 1));

// switch (coffeeSize) {
//   case SIZE_SMALL:
//     console.log('готовим маленький кофе');
//     break;
//   case SIZE_MEDIUM:

//     console.log('готовим средний кофе');
//     break;
//   case SIZE_LARGE:
//     console.log('готовим большой кофе');
//     break;
//   default:
//     console.log('такого кофе нет');
// }

// if (input === SIZE_SMALL) {
//   console.log('готовим маленький кофе');
// } else if (input === SIZE_MEDIUM) {
//   console.log('готовим средний кофе');
// } else if (input === SIZE_LARGE) {
//   console.log('готовим большой кофе');
// } else {
//   console.log('такого кофе нет');
// }

/*
  Написать скрипт кофейного магазина.
  Пользователь вводит выбор размера кофе.
  Если есть сказать сколько стоит и попросить денег.
  Проверить что пользователь дал достаточно денег.
  Если не достаточно то сказать что не достаточно.
*/

///*--------------------------------------------ПРИМЕР------------------------------------*/
// let groupSharmPlaces = 15;
// let groupHurgadaPlaces = 25;
// let groupTabaPlaces = 6;

// let reservingConfirm = confirm(
//   "Hello, Welcome to TourAgency. If you want to reserved a place please push OK ( Enter - in Win or Return - in mac). If you don't reserved place push Cancel or Esc - button on your keyboard",
// );

// if (reservingConfirm) {
//   let userPlaces = prompt(
//     `How much place you want to reserved? Max number of place ${Math.max(
//       groupSharmPlaces,
//       groupHurgadaPlaces,
//       groupTabaPlaces,
//     )}`,
//   );
//   const isInRange = userPlaces >= 1;
//   const isNotNull = userPlaces !== null;
//   const isNumber = !Number.isNaN(userPlaces);
//   const isValidInput = isNotNull && isNumber && isInRange;

// if (isValidInput) {
//   userPlaces = Number(userPlaces);
//     // Get Name of Group Choised
//     let groupName;
//     let userChoisedGroup;
//     if (userPlaces <= groupTabaPlaces) {
//       groupName = 'Taba';
//       userChoisedGroup = confirm(
//         `In group ${groupName} have a ${userPlaces} place. You'e confirm this or choise next group?`,
//       );
//       if (userChoisedGroup) {
//         alert(`Happy traveling in group ${groupName}`);
//         groupTabaPlaces = groupTabaPlaces - userPlaces;
//         console.log('New data of place after resevation: ' + groupTabaPlaces);
//       } else {
//         console.log('after Cancel in Taba - choise next Group');
//         userChoisedGroup = confirm(
//           `In group Sharm have a ${userPlaces} place. You'e confirm this or choise next group?`,
//         );
//         if (userChoisedGroup) {
//           alert(`Happy traveling in group Sharm`);
//           groupSharmPlaces = groupSharmPlaces - userPlaces;
//           console.log(
//             'New data of place after resevation: ' + groupSharmPlaces,
//           );
//         } else {
//           userChoisedGroup = confirm(
//             `In group Hurgada have a ${userPlaces} place. You'e confirm this choise or exit?`,
//           );
//           if (userChoisedGroup) {
//             alert(`Happy traveling in group Hurgada`);
//             groupHurgadaPlaces = groupHurgadaPlaces - userPlaces;
//             console.log(
//               'New data of place after resevation: ' + groupHurgadaPlaces,
//             );
//           } else {
//             alert('We are sorry, but you do not choise any thing. Bye');
//           }
//         }
//       }
//     } else if (userPlaces <= groupSharmPlaces) {
//       groupName = 'Sharm';
//       userChoisedGroup = confirm(
//         `In group ${groupName} have a ${userPlaces} place. You'e confirm this or choise next group?`,
//       );
//       if (userChoisedGroup) {
//         alert(`Happy traveling in group ${groupName}`);
//         groupSharmPlaces = groupSharmPlaces - userPlaces;
//         console.log('New data of place after resevation: ' + groupSharmPlaces);
//       } else {
//         userChoisedGroup = confirm(
//           `In group Hurgada have a ${userPlaces} place. You'e confirm this choise or exit?`,
//         );
//         if (userChoisedGroup) {
//           alert(`Happy traveling in group Hurgada`);
//           groupHurgadaPlaces = groupHurgadaPlaces - userPlaces;
//           console.log(
//             'New data of place after resevation: ' + groupHurgadaPlaces,
//           );
//         } else {
//           alert('We are sorry, but you do not choise any thing. Bye');
//         }
//       }
//     } else if (userPlaces <= groupHurgadaPlaces) {
//       userChoisedGroup = confirm(
//         `In group ${groupName} have a ${userPlaces} place. You'e confirm this choise or exit?`,
//       );
//       if (userChoisedGroup) {
//         alert(`Happy traveling in group ${groupName}`);
//         groupHurgadaPlaces = groupHurgadaPlaces - userPlaces;
//         console.log(
//           'New data of place after resevation: ' + groupHurgadaPlaces,
//         );
//       } else {
//         alert('We are sorry, but you do not choise any thing. Bye');
//       }
//     } else {
//       alert('Sorry we have not places');
//     }
//   } else {
//     // If user input incorect data we get alert after sending for user confirm data
//     alert(
//       `Sorry, you wasn't input a number of place can reserved. Or input incorrect Data (latter or number not include in range from 1 to ${Math.max(
//         groupSharmPlaces,
//         groupHurgadaPlaces,
//         groupTabaPlaces,
//       )}. You can true again`,
//     );
//     let userReactOnInData = confirm(
//       'You are really want to continuies plese push Enter or OK. If you are not continiues push Cancel or ESC',
//     );
//     if (userReactOnInData) {
//       document.location.reload(true);
//     } else {
//       alert('Thanks. GoodBye!!!');
//     }
//   }
// } else {
//   alert('Thanks for visit ours pages. See you Next time');
// }
// /*-----------------------ДОМАШКА--------------------------------------------------------------------*/
let groupTaba = 6;
let groupSharm = 15;
let groupHurgada = 25;
const userInput = prompt(
  'Введите число необходимых мест для поездки. В Taba возможно заказать 6-ть мест, в Sharm возможно заказать 15-ть мест и в Hurgada возможно заказать 25-ть мест',
);
const necessaryPlaces = Number(userInput);
const isValidInput = userInput !== null && !Number.isNaN(necessaryPlaces);
if (isValidInput) {
  let group;
  let order;

  if (groupTaba >= necessaryPlaces) {
    group = 'Taba';

    order = confirm(
      `В группе ${group} есть ${necessaryPlaces} мест. Вы закажите эту группу или продолжите выбор?`,
    );
    if (order) {
      alert(`Спасибо за заказ.`);
      groupTaba = groupTaba - necessaryPlaces;
      console.log('Осталось мест в гуппе Taba : ' + groupTaba);
    } else {
      console.log('Если Вы не хотитете в Taba - выбирайте другую группу.');
      order = confirm(
        `В группе Sharm есть ${necessaryPlaces} мест. Вы закажите эту группу или продолжите выбор?`,
      );
      if (order) {
        alert(`Спасибо за заказ.`);
        groupSharm = groupSharm - necessaryPlaces;
        console.log('Осталось мест в гуппе Sharm : ' + groupSharm);
      } else {
        order = confirm(
          `В группе Hurgada есть ${necessaryPlaces} мест. Вы закажите эту группу или продолжите выбор?`,
        );
        if (order) {
          alert(`Спасибо за заказ.`);
          groupHurgada = groupHurgada - necessaryPlaces;
          console.log('Осталось мест в гуппе Hurgada : ' + groupHurgada);
        } else {
          alert('Сделайте свой выбор');
        }
      }
    }
  } else if (groupSharm >= necessaryPlaces) {
    group = 'Sharm';
    order = confirm(
      `В группе ${group} есть ${necessaryPlaces} мест. Вы закажите эту группу или продолжите выбор?`,
    );
    if (order) {
      alert(`Спасибо за заказ.`);
      groupSharm = groupSharm - necessaryPlaces;
      console.log('Осталось мест в гуппе Sharm : ' + groupSharm);
    } else {
      console.log('Если Вы не хотитете в Sharm - выбирайте другую группу.');
      order = confirm(
        `В группе Hurgada есть ${necessaryPlaces} мест. Вы закажите эту группу ?`,
      );
      if (order) {
        alert(`Спасибо за заказ.`);
        groupSharm = groupHurgada - necessaryPlaces;
        console.log('Осталось мест в гуппе Hurgada : ' + groupHurgada);
      }
    }
  } else if (groupHurgada >= necessaryPlaces) {
    group = 'Hurgada';
    order = confirm(
      `В группе ${group} есть ${necessaryPlaces} мест. Вы закажите эту группу?`,
    );
    if (order) {
      alert(`Спасибо за заказ.`);
      groupHurgada = groupHurgada - necessaryPlaces;
      console.log('Осталось мест в гуппе Hurgada : ' + groupHurgada);
    }
  }
} else {
  alert('Извините, но вы ничего не выбираете !');
}
// if (necessaryPlaces) {
//   let userPlaces = prompt(
//     `Введите число необходимых мест для поездки в Taba, Sharm, Hurgada
//      ${Math.max(groupSharm, groupHurgada, groupTaba)}`,
//   );
// }
// const isInRange = userPlaces >= 1 ;
// const isNotNull = userPlaces !== null;
// const isNumber = !Number.isNaN(userPlaces);
// const isValidInput = isNotNull && isNumber && isInRange;
// if (isValidInput) {
//   userPlaces = Number(userPlaces)};
// // console.log('isInRange: ' + isInRange);
// console.log('isNotNull: ' + isNotNull);
// console.log('isNumber: ' + isNumber);
// console.log('isValidInput: ' + isValidInput);
// console.log('userPlaces: ' + userPlaces);
// console.log('typeof userPlaces: ' + typeof userPlaces);
/*-------------------------------ПРИМЕР------------------------------------------*/
// let groupTaba = 6;
// let groupSharm = 15;
// let groupHurga = 25;

// const userInput = prompt('Введите количество мест');
// const sumSpot = Number(userInput);

// const isValidInput = userInput !== null && !Number.isNaN(sumSpot);

// if (isValidInput) {
//   let group;
//   let sum;
//   let isSure;

//   if (groupTaba >= sumSpot) {
//     group = 'Taba';

//     isSure = confirm(`Есть место в группе ${group}, вы согласны быть в ней?`);

//     if (isSure) {
//       groupTaba = groupTaba - sumSpot;
//       alert(`Приятного путешествия в группе ${group}`);
//     } else {
//       alert('Нам очень жаль, приходите еще!');
//     }
//   } else if (groupSharm >= sumSpot) {
//     group = 'Sharm';

//     isSure = confirm(`Есть место в группе ${group}, вы согласны быть в ней?`);

//     if (isSure) {
//       groupSharm = groupSharm - sumSpot;
//       alert(`Приятного путешествия в группе ${group}`);
//     } else {
//       alert('Нам очень жаль, приходите еще!');
//     }
//   } else if (groupHurga >= sumSpot) {
//     group = 'Hurga';

//     isSure = confirm(`Есть место в группе ${group}, вы согласны быть в ней?`);

//     if (isSure) {
//       groupHurga = groupHurga - sumSpot;
//       alert(`Приятного путешествия в группе ${group}`);
//     } else {
//       alert('Нам очень жаль, приходите еще!');
//     }
//   } else {
//     alert('Извините, мест нет');
//   }
// } else {
//   alert('Oшибка ввода!');}
