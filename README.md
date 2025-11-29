# 🌦️ Weather Widget (Vue 3 + TS + Webpack)

**Лёгкий виджет погоды**, который можно встроить на любой сайт с помощью одного HTML-тега.

## 🚀 Установка

### 1. Клонируйте проект

```bash
git clone https://github.com/sevenscoding/weather-widget.git
cd weather-widget
```

### 2. Установите зависимости

```bash
pnpm install
```

### 3. Создайте .env

```
OPEN_WEATHER_KEY=25f7a4ceb6fa13a5461285cedcbe96bb
```

### 4. Запуск

```bash
pnpm dev
```

## 📦 Продакшн

```bash
pnpm build
```

## 🔌 Встраивание на сайт

```html

<weather-widget></weather-widget>
<script src="weather-widgets.js"></script>
```

## 🧩 Возможности

- Dashboard погоды
- Настройки: поиск, удаление, drag&drop
- Geolocation + reverse geo
- Debounce поиск
- Полная типизация

