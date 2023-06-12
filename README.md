# ts-practice

Список задач:
* [lesson 1](#lesson-1) "Встановлення та налаштування";
* [lesson 2](#lesson-2) "Типи";
* [lesson 3](#lesson-3) "Налаштування компілятора";
* [lesson 4](#lesson-4) "Класси";
<!-- * [lesson 5](#lesson-5) "Advanced Types/Generics";
* [lesson 6](#lesson-6) "Декоратори";
* [lesson 7](#lesson-7) "TypeScript і React";
* [lesson 8](#lesson-8) "TypeScript і NodeJs". -->

## Lesson 1:
Встановимо глобально typeScript, якщо ви ще цього не зробили.
```
npm i -g typescript
```

Створіть папку проекту, наприклад tsCourse.

Створіть файл app.ts

```typescript
const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});
```

Скомпілюйте файл наступною командою
```
tsc app.ts
```
У вас з'явиться файл app.js

Тепер давайте додамо файл index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Simple TypeScript page</title>
    <script src="app.js" defer></script>
  </head>
  <body>
    <input type="number" id="num1" placeholder="Number 1" />
    <input type="number" id="num2" placeholder="Number 2" />
    <button>Add!</button>
  </body>
</html>
```

Виконаємо ініціалізацію.
```
npm init -y
```
І тепер одразу додамо маленький сервер
```
npm i --save-dev lite-server
```
Перейдемо в package.json і додамо в блок scripts нове значення "start": "lite-server", у вас повинно вийти якось так:
```JSON
{
  "name": "TsCourse",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "lite-server": "^2.6.1"
  }
}
```

Запустимо сервер
```
npm start
```

## Lesson 2:

Задайте правильні ts типи для класичних js;
```js
let age = 50;
let name = 'Max';
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a) => { return 100 + a };
```
Задайте тип для змінної, в яку можна зберегти будь-яке значення.
```js
let anything = -20;
anything = 'Text';
anything = {};
```
Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
```ts
let some:unknown;
some = 'Text';

let str: string;

str = some;
```
Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
```js
let person = ['Max', 21];
```
Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).

Зробіть змінну, яка може приймати або рядок, або число.

Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'

Вкажіть типи для наступних функцій
```js
function showMessage(message) {
  console.log(message);
}


function calc(num1, num2) {
  return num1 + num2;
}

function customError() {
  throw new Error('Error');
}
```
Створіть свій тип даних на основі наявних даних.
```js
const page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}
```

## Lesson 3:

Запустіть команду
```
tsc --init
```
Налаштуйте компілятор, як зазначено в документації.

Увімкніть режим watch
```
tsc -w
```
Поекспериментуйте, поміняйте в налаштуваннях "target" з es5 і es6, подивіться, як відрізняється js код.

Налаштуйте Debugging, спробуйте запустити його та поставити breakpoint у різних частинах коду.

## Lesson 4:

Давайте побудуємо будинок:

- Створіть абстрактний клас House, в ньому повинна бути наступна логіка
  * властивість door – вона може бути закрита, або відкрита.
  * властивість key – об'єкт класу Key.
  * конструктор приймає аргумент класу Key та зберігає його у властивість key.
  * метод comeIn, який додає об'єкт класу Person у властивість tenants і це спрацьовує лише, якщо door відкрита.
  * абстрактний метод openDoor приймає аргумент класу Key
 
- Створіть клас MyHouse, який реалізує клас House
  * створюємо метод openDoor, оскільки він приймає ключ, звіряємо збережений ключ у властивості key чи дорівнює він ключу з аргументу, якщо так, відкриваємо двері.

- Створіть об'єкт Key
  * є тільки властивість signature
  * під час створення об'єкта генерує випадкове число та зберігає його у signature
  * метод getSignature повертає випадкове число з signature
 
- Створіть об'єкт Person
  * конструктор приймає ключ класу Key і зберігає його у властивість key
  * метод getKey повертає key
  * Зробіть так, щоб мешканець потрапив додому.

## Lesson 5:

Є функція, яка повертає Promise, він повертає масив рядків і чисел, опишіть правильно тип.
```js
function getPromise () {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise ()
.then((data) => {
  console.log(data);
});
```
У вас є наступний тип даних
```ts
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}
```
Є функція, вона приймає два аргументи, в один потрапляє name і color, в іншу частину - position і weight. Потрібно явно вказати, що ці поля з AllType. І сама функція повертає AllType. Скористайтеся Pick.
```ts
function compare (top, bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}
```
Вкажіть дженерики для функції об'єднання об'єктів.
```js
function merge (objA, objB) {
  return Object.assign(objA, objB);
}
```

У вас є наступні класи
```ts
class Component {
  constructor (public props:T) {

  }
}

class Page extends Component {
  pageInfo () {
    console.log(this.props.title);
  }
}
```
Тільки додаючи дженерики для класів та інтерфейс, приберіть помилку.
