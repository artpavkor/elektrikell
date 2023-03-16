import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// redux это обработчик состояний для разных библиотек 
// основы redux очень схожи с React состояниями 
// как и в React состояние так и в Redux есть изначальное состояние  и функция для изменения состояния 
// Изначальное состояние это обьект в котором хранится разные свойства\состояния 

const initaState = {
    hourRange: 1,
    lowPriceTimestamp: null,
    showForm: false,
    errorMessage: null,
};

// Функции изменение  состояния называються в redux ('action') 
// Action создает обьект в котором есть его тип и обьект payload в котором будет находиться новое состояние  

export const setHourRange = createAction("setHourRange");
export const setLowPriceTimestamp = createAction("setLowPriceTimestamp");
export const setShowForm = createAction("setShowForm");
export const setErrorMessage = createAction("setErrorMessage");
export const setSearchDate = createAction("setSearchDate")

// reducer используется для определения что будет делать action при его инициализации 
// Мы создаем функции с названием action в которых меняем состояние 

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
        state.errorMessage = action.payload
    },

    [setSearchDate]: (state, action) => {
        state.searchDate = action.payload
    }
});

// Store это облако в котором хранится вся информация о redux состоянии

export const store = configureStore({ reducer });
