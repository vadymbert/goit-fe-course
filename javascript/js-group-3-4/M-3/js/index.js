'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const checkIfLoginExists = (logins, login) => logins.includes(login);
const checkLoginValidity = login => {
  let min = 4;
  let max = 16;
   const result = login.length >= min && login.length <= max;
  return result;
};
const addLogin = (logins, login) => {
  let isRange = checkLoginValidity(login);
  if (!isRange) {
    alert('Ошибка! Логин должен быть от 4 до 16 символов');
    return;
  }
    let includeLogin = checkIfLoginExists(logins, login);
  if (includeLogin) {
    alert('Такой логин уже используется!');
    return;
  }
  logins.push(login);
  alert('Логин успешно добавлен!');
};
const login = prompt('Введите логин');
addLogin(logins, login);
console.log(logins);
// https://github.com/vadymbert/goit-fe-course/tree/master/javascript/js-group-3-4/M-3/js
// https://vadymbert.github.io/goit-fe-course/javascript/js-group-3-4/M-3/js/index.js
