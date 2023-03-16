import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './services/stateService';

// ReactDOM это вспомогательный пакет React для работы с DOM (Document Object Model)
// ReactDOM это мост между React и браузерским DOM 
// Елемент с HTML <div id = root> и оборачивается React
// Все наше приложение затем отрисовуется (Render) в этом <div id = root> 

const root = ReactDOM.createRoot(document.getElementById('root'));

// Для того что бы использовать redux состояние  в React мы используем дополнительную библиотеку react-redux
// С react-redux берем Provider и передаем ему наш redux и этот компонент должен обернуть весь наш проект


// Для имитирования multi-page-aplication используеться React Router Dom
// Посколько react это single-page-aplication то что бы работали ссылки и не перезапускалось приложение нужно обернуть 
// все наше приложение в BrowserRouter>
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
