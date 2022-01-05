import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    book: null,
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
};

export const booksSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        fetchData: (state, action) => {
            state.books = action.payload
        },
        fetchBook: (state, action) => {
            state.book = action.payload
        },
        setCart: (state, action) => {
            const data = {...action.payload, count: 1}
            state.cart = [...state.cart, data]
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        addCart: (state, action) => {
            const data = state.cart.map(item => {
                if (item.id === action.payload) {
                    return item = {...item, count: item.count + 1}
                } else return item
            })
            state.cart = data
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeCart: (state, action) => {
            let data = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return (item = { ...item, count: item.count - 1 });
                } else return item;
            });
            data = data.filter(book => book.count > 0)
            state.cart = data;
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeAll: (state, action) => {
            let data = state.cart.filter(book => book.id !== action.payload)
            state.cart = data
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }
    },
});

// Action creators are generated for each case reducer function
export const { books, fetchData, book, fetchBook, cart, setCart, addCart, removeCart, removeAll } =
    booksSlice.actions;

export default booksSlice.reducer;
