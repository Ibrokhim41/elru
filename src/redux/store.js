import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import modalsReducer from "./modals";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        modals: modalsReducer,
    },
});
