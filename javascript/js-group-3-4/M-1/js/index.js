'use strict';
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

