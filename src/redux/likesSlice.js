import { createSlice } from "@reduxjs/toolkit";

export const LikesSlice = createSlice({
    name: 'likes',
    initialState: {
        value: 10
    },
    reducers: {
        increment: state => {state.value += 1},
        decrement: state => {state.value -= 1},
    }
})

export const selectLikes = (state) => state.likes.value

export const { increment, decrement } = LikesSlice.actions
export default LikesSlice.reducer