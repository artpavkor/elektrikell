# Elektrikell app.

![visual code](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![visual code](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![visual code](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![visual code](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)
![visual code](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![visual code](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![visual code](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

![ScreenElektrikell](https://user-images.githubusercontent.com/121131393/226214266-846abb4e-3074-4a98-a325-8360b1d5f0d5.gif)

Веб-приложение, разработанное на [React.js](https://github.com/reactjs) с использованием библиотек [Moment.js](https://momentjs.com/), [Recharts](https://recharts.org/), [React Router](https://reactrouter.com/en/main) и [Redux Toolkit](https://redux-toolkit.js.org/), которое позволяет пользователю просматривать цену на электроэнергию в определенное время и выбирать диапазон времени, чтобы увидеть самое низкое и самое высокое время цены на электроэнергию.

В проекте также использовались [Sass](https://sass-lang.com/) и [Bootstrap](https://getbootstrap.com/) для стилизации интерфейса, а также асинхронные запросы API с сайта [elering.ee](elering.ee) для получения данных о цене на электроэнергию.

## **В проекте используются следующие библиотеки и фреймворки:**

- ### Использование библиотек `Moment.js` для работы с датами и временем.
  > _Moment.js - это библиотека для работы с датами и временем в JavaScript. Она позволяет удобно парсить, форматировать, сравнивать и манипулировать датами и временем. Библиотека легко настраивается и имеет обширную документацию._

```jsx
import moment from 'moment';

export const rangePricesGenerate = (data, hourRange = 1) => {
  const timestampNow = moment().unix();
  const futureData = data.filter((el) => el.timestamp > timestampNow);
  const hourRangeLocal = hourRange + 1;

  const rangePrices = [];

  futureData.forEach((v, i, arr) => {
    const range = arr.slice(i, i + hourRangeLocal);
    if (range.length === hourRangeLocal) {
      let sum = 0;
      range.forEach((v) => (sum += v.price));
      rangePrices.push({ sum, i, timestamp: v.timestamp });
    }
  });

  rangePrices.sort((a, b) => a.sum - b.sum);

  return rangePrices;
};
```

- ### Использование библиотеки `Recharts` для создания графиков цен на электроэнергию.

  > _Recharts - это библиотека графиков на основе React. Она предоставляет широкий выбор компонентов для создания различных типов графиков, таких как линейные, столбчатые, круговые и другие. Библиотека легко настраивается и интегрируется с React-приложениями._

```jsx
<LineChart width={500} height={300} data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
</LineChart>
```

- ### Использование библиотеки `React Router` для навигации по страницам приложения.

  > _React Router - это библиотека маршрутизации для React-приложений. Она позволяет управлять переходами между различными страницами и компонентами в приложении, а также передавать параметры в адресной строке. React Router обеспечивает быстрое и удобное управление навигацией в приложении._

```jsx
import { Routes, Route } from 'react-router-dom';
import About from './About';
import ElektriKell from './ElektriKell';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ElektriKell />} />
      <Route path="/:activePrice" element={<ElektriKell />} />
      <Route path="/low/:durationParam" element={<ElektriKell />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
```

- ### Использование `Redux Toolkit` для управления состоянием приложения.
  > _Redux Toolkit - это библиотека для упрощения работы с Redux в React-приложениях. Она предоставляет удобные функции для создания и управления Redux-хранилищем, а также уменьшает количество бойлерплейта при написании кода на Redux. Redux Toolkit делает работу с Redux более удобной и быстрой._

```jsx
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const initaState = {
  hourRange: 1,
  lowPriceTimestamp: null,
  showForm: false,
  errorMessage: null,
};

export const setHourRange = createAction('setHourRange');
export const setLowPriceTimestamp = createAction('setLowPriceTimestamp');
export const setShowForm = createAction('setShowForm');
export const setErrorMessage = createAction('setErrorMessage');
export const setSearchDate = createAction('setSearchDate');

const reducer = createReducer(initaState, {
  [setHourRange]: (state, action) => {
    state.hourRange = action.payload;
  },

  [setLowPriceTimestamp]: (state, action) => {
    state.lowPriceTimestamp = action.payload;
  },

  [setShowForm]: (state, action) => {
    state.showForm = action.payload;
  },

  [setErrorMessage]: (state, action) => {
    state.errorMessage = action.payload;
  },

  [setSearchDate]: (state, action) => {
    state.searchDate = action.payload;
  },
});

export const store = configureStore({ reducer });
```

- ### Использование `Bootstrap` для ускорения разработки и создания адаптивного интерфейса.
  > _Bootstrap - это фреймворк для веб-разработки, предоставляющий набор инструментов для создания современных и адаптивных веб-сайтов и веб-приложений. Он включает в себя готовые компоненты и шаблоны, написанные на HTML, CSS и JavaScript, которые упрощают создание качественного пользовательского интерфейса._

```jsx
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { setErrorMessage } from './services/stateService';
import { useSelector, useDispatch } from 'react-redux';

function ErrorModal() {
  const handleClose = () => dispatch(setErrorMessage(null));

  const errorMessage = useSelector((state) => state.errorMessage);
  const dispatch = useDispatch();

  return (
    <Modal show={!!errorMessage} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>{errorMessage}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ErrorModal;
```

# Установка и запуск

**Чтобы запустить приложение, выполните следующие действия:**

- Клонируйте репозиторий на свой компьютер.

- Установите зависимости, выполнив команду `npm install`.

- Запустите приложение, выполнив команду `npm start`.

---

---

---
