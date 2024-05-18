[![Main CI status](https://github.com/SemchenkoEkaterina/aston_react/actions/workflows/ci-cd.yml/badge.svg?branch=main)](https://github.com/SemchenkoEkaterina/aston_react/actions)

# Giphy

- API: [GIPHY API](https://developers.giphy.com/docs/api/endpoint)

---

## Основной функционал

- Регистрация и авторизация пользователей
- Загрузка списка гифок
- Страница с историей поиска
- Страница с любимыми гифками

---

## Реализация требований

### 1 уровень (обязательный - необходимый минимум)

- [x] Реализованы Требования к функциональности

#### React

- [x] Пишем [функциональные компоненты c хуками](https://github.com/SemchenkoEkaterina/aston_react/tree/main/src/components)
- [x] Есть разделение на [умные](https://github.com/SemchenkoEkaterina/aston_react/blob/main/src/pages/Favorite.tsx) и [глупые](https://github.com/SemchenkoEkaterina/aston_react/blob/main/src/components/GifsList.tsx) компоненты
- [x] Реализована хотя бы одна [форма](https://github.com/SemchenkoEkaterina/aston_react/blob/main/src/components/Form.tsx)
- [x] Есть применение [Контекст API](https://github.com/SemchenkoEkaterina/aston_react/blob/main/src/providers/ThemeProvider.tsx)
- [x] Есть применение [предохранителя](https://github.com/SemchenkoEkaterina/aston_react/blob/main/src/error/ErrorBoundary.tsx)
- [x] Есть хотя бы один кастомный хук: [useAuth](https://github.com/SemchenkoEkaterina/aston_react/blob/main/src/hooks/useAuth.hook.ts),
- [x] Хотя бы несколько компонентов используют PropTypes: [GifCard](https://github.com/SemchenkoEkaterina/aston_react/blob/main/src/components/GifCard.tsx), [GifList](https://github.com/SemchenkoEkaterina/aston_react/blob/main/src/components/GifsList.tsx), [CardPage](https://github.com/SemchenkoEkaterina/aston_react/blob/main/src/pages/Card.tsx)
- [x] Поиск не должен триггерить много запросов к серверу: [Debounce](https://github.com/SemchenkoEkaterina/aston_react/blob/main/src/hooks/useDebounce.hook.ts)
- [x] Есть применение [Lazy](https://github.com/SemchenkoEkaterina/aston_react/blob/main/src/components/routes/constants.tsx)[+ Suspense](https://github.com/SemchenkoEkaterina/aston_react/blob/main/src/components/routes/Main-Router.tsx)

#### Redux

- [x] Используется[Modern Redux with Redux Toolkit](https://github.com/SemchenkoEkaterina/aston_react/blob/main/src/store/index.tsx)
- [x] Используется [слайсы](https://github.com/SemchenkoEkaterina/aston_react/tree/main/src/store/slices)
- [x] Есть хотя бы одна кастомная [мидлвара](https://github.com/SemchenkoEkaterina/aston_react/blob/main/src/store/middleware/userMiddleware.ts)
- [x] Используется [RTK Query](https://github.com/SemchenkoEkaterina/aston_react/blob/main/src/store/api/gifApi.tsx)
- [x] Используется [Transforming Responses](https://github.com/SemchenkoEkaterina/aston_react/blob/main/src/store/api/gifApi.tsx)

---
### 2 уровень (необязательный)

- [x] Используется TypeScript
- [x] Используется[Firebase](https://github.com/SemchenkoEkaterina/aston_react/blob/main/src/firebase.tsx)
- [x] Настроен CI/CD
- [x] Реализована виртуализация [списков](https://github.com/SemchenkoEkaterina/aston_react/blob/main/src/components/SerchList.tsx) //работает с помощью библиотеки 'react-window'