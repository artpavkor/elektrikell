import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const initaState = {
    hourRange: 1, 
    lowPriceTimestamp: null,
};

export const setHourRange = createAction("setHourRange");
export const setLowPriceTimestamp = createAction("setLowPriceTimestamp");

const reducer = createReducer(initaState, {
    
    [setHourRange]: (state, action) => {
        state.hourRange = action.payload;
    },

    [setLowPriceTimestamp]: (state, action) => {
        state.lowPriceTimestamp = action.payload;
    }
});

export const store = configureStore({reducer});
