import { configureStore } from "@reduxjs/toolkit";
import likesSlice from "./likesSlice";
import commentsSlice from "./commentsSlice";

const store = configureStore({
    reducer: {
        likes: likesSlice,
        comments: commentsSlice
    }
})

export default store;