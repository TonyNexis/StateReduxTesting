import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "./commentsSlice";
import likesSlice from "./likesSlice";
import spinnerSlice from './spinnerSlice';

const store = configureStore({
    reducer: {
        likes: likesSlice,
        comments: commentsSlice,
        spinner: spinnerSlice
    }
})

export default store;