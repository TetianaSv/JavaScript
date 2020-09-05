// const countryName = promt();
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
// const CHINA = 'Китай';
// const AUSTRALIA = 'Австралия';
// const INDIA = 'Индия';
// const JAMAICA = 'Ямайка';
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
//   switch (country) {
//     // Write code under this line
//     case CHINA:
//       price = 100;
//       break;

//     case AUSTRALIA:
//       price = 170;
//       break;

//     case INDIA:
//       price = 80;
//       break;

//     case JAMAICA:
//       price = 120;
//       break;

//     default:
//       price = 0;
//       message = NO_DELIVERY;
//   }
// }
// if (price > 0) {
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }

// console.log(message);

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

//console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

//console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

//console.log(calculateEngravingPrice('Uno', 100)); // 100

//Задача 2.2

// const calculateEngravingPrice = (message = '', pricePerWord = 0) => {
//   let wordsInString = message.split(' ').length * pricePerWord;
//   return wordsInString;
// };

// // Write code in this line

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// console.log(calculateEngravingPrice('Uno', 100)); // 100

//

//Задача номер ?
// function formatString(string, maxLength = 40) {
//   let stringAll = string.length;

//   if (stringAll <= maxLength) {
//     return formatString;
//   } else stringAll > maxLength;

//   return formatString((maxLength = stringAll));
// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(
//   formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
// );
// // 'Vestibulum facilisis, purus ne...'

function isLoginValid(login, min = 4, max = 16) {
  return login.length >= min && login.length <= max ? true : false;
}

function isLoginUnique(allLogins, login) {
  'use strict';
  return allLogins.includes(login) ? false : true;
}

function addLogin(allLogins, login) {
  'use strict';
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;
  if (isLoginValid(login) !== true) {
    message = ERROR;
  } else if (isLoginUnique(allLogins, login) !== true) {
    message = REFUSAL;
  } else {
    allLogins.push(login);
    message = SUCCESS;
  }
  return message;
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

console.log(addLogin(logins, 'Ajax'));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, 'robotGoogles'));
// 'Такой логин уже используется!'

console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
