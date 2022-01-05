import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import booksReducer from "./books";
import createSagaMiddleware from "redux-saga";
import saga from "./saga/sagas";
import modalsReducer from "./modals";

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({thunk: false}), sagaMiddleware];
const store = configureStore({
    reducer: {
        modals: modalsReducer,
        books: booksReducer,
    },
    middleware
});

sagaMiddleware.run(saga);

export default store;