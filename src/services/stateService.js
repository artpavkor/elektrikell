import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const initaState = {
    hourRange: 1,
    lowPriceTimestamp: null,
    showForm: false,
    errorMessage: null,
};

export const setHourRange = createAction("setHourRange");
export const setLowPriceTimestamp = createAction("setLowPriceTimestamp");
export const setShowForm = createAction("setShowForm");
export const setErrorMessage = createAction("setErrorMessage");
export const setSearchDate = createAction("setSearchDate")

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

export const store = configureStore({ reducer });
