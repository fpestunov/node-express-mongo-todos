# Mongo App

# 1. Подготовка проекта

Установка пакетов:
```sh
npm init -y // -y создание проекта без вопросов
npm i express
npm i mongoose
npm i express-handlebars
npm i -D nodemon // пакет для упрощения разработки, ставим в раздел Dev
```

Добавление скриптов в `package.json`:
```json
  "scripts": {
    "start": "node index",
    "dev": "nodemon index"
  },
```

Пишем код `index.js`

Регистрируемся mongodb.com

Подключаем hbs

В Монго настраиваем **Connect**. Параметры надо выносить в Конфиг, но это тестовое приложение.

Проверяем приложение, запустив `npm run dev`. Ошибок нет.


# 2. Создаем Routes

# 3. Модель Todo

https://youtu.be/8bE_PBRriyU?t=1951
https://github.com/vladilenm/express-mongo-todos