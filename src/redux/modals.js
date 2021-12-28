import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: false,
    startComment: false,
    startChat: false,
    startOrder: false,
    leaveComment: false,
    regionChoose: false,
    fillBalance: false,
    thanks: false,
    newName: false,
    newPhoneNumber: false,
    deliveryTo: null,
    getLanguage: localStorage.getItem("i18nextLng")
};

export const counterSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.auth = action.payload;
        },
        setStartComment: (state, action) => {
            state.startComment = action.payload;
        },
        setStartChat: (state, action) => {
            state.startChat = action.payload;
        },
        setStartOrder: (state, action) => {
            state.startOrder = action.payload;
        },
        setLeaveComment: (state, action) => {
            state.leaveComment = action.payload;
        },
        setRegionChoose: (state, action) => {
            state.regionChoose = action.payload;
        },
        setDeliveryTo: (state, action) => {
            state.deliveryTo = action.payload;
        },
        setFillBalance: (state, action) => {
            state.fillBalance = action.payload;
        },
        setThanks: (state, action) => {
            state.thanks = action.payload;
        },
        setNewName: (state, action) => {
            state.newName = action.payload;
        },
        setNewPhoneNumber: (state, action) => {
            state.newPhoneNumber = action.payload;
        }
        // increment: (state) => {
        //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
        //     // doesn't actually mutate the state because it uses the Immer library,
        //     // which detects changes to a "draft state" and produces a brand new
        //     // immutable state based off those changes
        //     state.value += 1;
        // },
        // decrement: (state) => {
        //     state.value -= 1;
        // },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload;
        // },
    },
});

// Action creators are generated for each case reducer function
export const {
    setAuth,
    setStartComment,
    setFillBalance,
    setStartOrder,
    setStartChat,
    setLeaveComment,
    setRegionChoose,
    setDeliveryTo,
    setThanks,
    setNewName,
    setNewPhoneNumber
} = counterSlice.actions;

export default counterSlice.reducer;
