// https://docs.google.com/spreadsheets/d/1c3uNBep2u9_ccjssFTfE6fEsTSacf2DuQs_KGK-LPNw/edit?usp=sharing
'use strict';
const initialUsers = [
  {
    id: '-s19a6hqce',
    login: 'mangozedog@mail.com',
    password: 'qwe123zv',
    isActive: true,
  },
  {
    id: '-qkpzenjxe',
    login: 'polysweet@skynet.ze',
    password: '123zxc78',
    isActive: true,
  },
  {
    id: '-e51cpd4di',
    login: 'ajax2k@change.ua',
    password: 'ert234qw',
    isActive: false,
  },
];

const initialPosts = {
  '-s19a6hqce': [
    { id: '-5sgljaskg', text: 'post #1', likes: 3 },
    { id: '-199hb6igr', text: 'post #2', likes: 5 },
    { id: '-hy0eyw5qo', text: 'post #3', likes: 13 },
  ],
  '-qkpzenjxe': [
    { id: '-5tu69g5rf', text: 'post #1', likes: 8 },
    { id: '-bje766393', text: 'post #2', likes: 15 },
  ],
  '-e51cpd4di': [
    { id: '-9y6nkmlj4', text: 'post #1', likes: 18 },
    { id: '-i03pbhy3s', text: 'post #2', likes: 45 },
  ],
};

const getId = () =>
  '-' +
  Math.random()
    .toString(36)
    .substr(2, 9);

function SocialBook(users = [], posts = {}) {
  this.users = users;
  this.posts = posts;

  this.getAllUsers = () => this.users.map(user => user.login);
  this.getUserByLogin = login => this.users.find(user => user.login === login);

  this.getUserStatus = userId =>
    this.users
      .map(
        user =>
          user.isActive
            ? { ...user, isActive: 'active' }
            : { ...user, isActive: 'inactive' },
      )
      .find(user => user.id === userId).isActive;

  this.addUser = user => this.users.push(user);
  this.removeUserById = userId => this.users.filter(user => user.id !== userId);
  this.getUsersCount = () => this.users.length;
}

const socialBook = new SocialBook(initialUsers, initialPosts);
// console.log(socialBook);

console.log('Возвращает массив всех пользователей:', socialBook.getAllUsers());
console.log(
  'Ищет и возвращает объект пользователя с совпадающим логином:',
  socialBook.getUserByLogin('mangozedog@mail.com'),
);
console.log(
  'Ищет пользователя по id :',
  socialBook.getUserStatus('-e51cpd4di'),
);

console.log('Добавляет пользователя:', socialBook.users);
console.log(
  'Удаляет пользователя из массива пользователей по полю id:',
  socialBook.removeUserById('-qkpzenjxe'),
);
console.log(
  'Возвращает общее количество пользователей:',
  socialBook.getUsersCount(),
);

const user = {
  id: getId(),
  login: 'kongobongo@gmail.com',
  password: '1234567',
  isActive: false,
};
console.log('Новый пользователь:', user);
socialBook.addUser(user);
