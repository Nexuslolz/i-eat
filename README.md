# IEat
### Ссылка на прототип:

https://i-eat-app.netlify.app/

## Preview

<img src='./src/assets/ieat.gif' width='350'>

## Описание
Приложение для контроля питания, помогающее пользователем следить за питанием, ставить цели, планировать их достижение, рассчитывать качественный состав своего рациона и подбирать необходимые рецепты для себя

Технологии используемые на проекте: <br>

[![Skills](https://skillicons.dev/icons?i=ts,react,redux,webpack,scss)](https://skillicons.dev)

<br>

В проекте реализовано:

- Главная страница:
  - Группировкой рецептов по приему пищи
  - Бесконечный слайдер с предложениями рецептов попадающих под категорию здорового питания.
  - Блок с информацией о приложении, рассказывающая какой функционал мы предоставляем, с ссылками на соответствующие разделы

- Страница с рецептами:
  - Карточка рецепта: содержит картинку и краткую информацию о рецепте
  - Динамическая подгрузка рецептов по мере прокрутки
  - Кнопка "вернуться к началу страницы"
  - Фильтрация рецептов по различным категориям

- Страница отдельного рецепта
  - Содержит информацию о рецепте: способ приготовления, состав, БЖУ, принадлежность к различным категориям

- Конструктор
  - Содержит в себе опрос для пользователя с целью составления программы питания. Опрос включает:
    - Возраст
    - Рост
    - Вес
    - Пол
    - Образ жизни
    - Цель
  - После опроса для пользователя открывается страница с:
    - Дневной нормой потребления питательных веществ
    - Предложением получить случайным образом рецепты для каждого приема пищи, в соответствии с показателями в таблице
  - Сохранение данных формы при помощи sessionStorage

- Калькулятор каллорий
  - Содержит поле для ввода меры, количества, самого продукта (например, 1 ложка риса, 100 грамм яблок)
  - После получения данных приложение представляет пользователю полный качественный состав этих продуктов с учетом введенного количества и меры

- Страница "О нас" содержит информацию о разработчиках приложения

- Личный кабинет пользователя (для каждого пользователя предусмотрен отдельный кабинет)
  - Блок с информацией о себе, куда пользователь может ввести свои данные
  - Раздел с избранными рецептами
  - Раздел "Список покупок", который включает
    - Поиск в базе данных продуктов по названию с отображением их состава БЖУ
    - Сохранение продукта в свой список с возможностью удаления
    - Отображение качественного состава продукта

- Модальное окно Регистрации/Авторизации
  - Валидация полей ввода
  - Разработано при помощи Firebase / Redux
  - Обработка ошибок формы

## Особенности проекта

- Реализована страница 404 при вводе некорректного URL
- Для добавления рецепта в избранное и перехода в личный кабинет необходима авторизация пользователя в приложении
- Добавление в избранное происходит при помощи Redux + LocalStorage, список избранных рецептов сохраняется для каждого пользователя отдельно
- Поиск рецептов, доступен из каждого раздела приложения, при использовании производит переадресацию в раздел с рецептами
- Кроссбраузерная, семантическая верстка
- Приложение адаптировано под мобильные устройства
- Различная плавная анимация
- Индикаторы загрузки во время получения ответа от сервера
- Отображение ошибок, полученных при работе с сервером
- Так как работа осуществляется с бесплатным API, возможны частые ошибки 429 в связи с ограничением по количеству запросов в единицу времени
