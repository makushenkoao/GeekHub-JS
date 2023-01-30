import {combineReducers, configureStore} from "@reduxjs/toolkit";

import stories from './storiesReducer'

const rootReducer = combineReducers({stories})
export const store = configureStore({
    reducer : rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
})