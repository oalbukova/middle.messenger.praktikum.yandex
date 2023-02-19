# Мессенджер
## [Ссылка на oпубликованное в Netlify приложение](https://famous-sherbet-f653e5.netlify.app)

### Самостоятельная проектная работа, выполненная в рамках обучения на курсе [Мидл фронтенд-разработчик](https://praktikum.yandex.ru/middle-frontend/) от Яндекс.Практикум.

## Спринт 1

* Свёрстаны  страницы приложения с использованием шаблонизатора [Handlebars](https://handlebarsjs.com/).

* Настроена сборка с использованием [Parcel](https://parceljs.org/) и раздача статики сервером на Express.

* Приложение автоматически деплоится на [Netlify](https://www.netlify.com/) из ветки `deploy`. [Ссылка на приложение](https://famous-sherbet-f653e5.netlify.app).

## Спринт 2

* Внедрен TypeScript.

* Добавлен компонентный подход в проект (реализация блока и Event Bus).

* Сделан сбор данных из форм.

* Добавлена валидация на все формы. Валидация работает по focus/blur событиям и второй раз проверяется при нажатии на submit. Используются регулярные выражения.

* Генерация страниц происходит на стороне клиента.

* Добавлен класс для работы с запросами.

* Добавлен ESLint, Stylelint и Prettier.

## Спринт 3

* Добавлен роутинг в проект.

* Внедрен HTTP API чатов, авторизации и пользователей.

* Подключен WebSocket для работы с real-time сообщениями.

## Установка и запуск

### Установка

Установка зависимостей:

```bash
npm i
```

### Сборка и запуск

Сборка проекта. Используемый сборщик [Parcel](https://parceljs.org/):

```bash
npm run build
```

Сборка проекта с наблюдением за файлами (Hot Reloading):

```bash
npm run dev
```

Сборка проекта и запуск сервера на Express, на порту 3000: http://localhost:3000

```bash
npm run start
```
