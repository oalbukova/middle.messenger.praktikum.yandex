# Мессенджер

* Опубликованное в Netlify приложение: [Ссылка на приложение](https://jovial-macaron-a5ffcb.netlify.app)

## Описание

Самостоятельная проектная работа, выполненная в рамках обучения на курсе [Мидл фронтенд-разработчик](https://praktikum.yandex.ru/middle-frontend/)  [Яндекс.Практикума](https://praktikum.yandex.ru).

## Спринт 1

* Свёрстаны  страницы приложения с использованием шаблонизатора [Handlebars](https://handlebarsjs.com/)

* Настроена сборка с использованием [Parcel](https://parceljs.org/) и раздача статики сервером на Express

* Приложение автоматически деплоится на [Netlify](https://www.netlify.com/) из ветки `deploy`. [Ссылка на приложение](https://jovial-macaron-a5ffcb.netlify.app)

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

Сборка проекта и запуск сервера на Express, на порту 3000. http://localhost:3000:

```bash
npm run start
```
