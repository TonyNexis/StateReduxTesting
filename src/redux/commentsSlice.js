import { createSlice, nanoid } from "@reduxjs/toolkit";

export const CommentsSlice = createSlice({
    name: 'comments',
    initialState: [],
    reducers: {
      commentGet: {
          reducer: (state, action) => {
            state.push(...action.payload)
          }
        },
        commentCreate: {
            reducer: (state, action) => {
              state.push(action.payload)
            },
            prepare: (text) => {
              const id = nanoid()
              return { payload: { id, text} }
            },
          },
        commentDelete: {
          reducer: (state, action) => {
            return state.filter(comment => comment.id !== action.payload);
          }
        },
        commentEdit: {
          reducer: (state, action) => {
            const { id, text } = action.payload;
            const commentToEdit = state.find(comment => comment.id === id);
            if (commentToEdit) {
              commentToEdit.text = text;
            }
          },
        }
    }
})

export const { commentCreate, commentDelete, commentEdit, commentGet } = CommentsSlice.actions
export default CommentsSlice.reducer