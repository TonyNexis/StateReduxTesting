import { createSlice, nanoid } from "@reduxjs/toolkit";

export const CommentsSlice = createSlice({
    name: 'comments',
    initialState: [{id: 'BGMGYc4NYCSpK87Bw9OLf', text: 'test comment'}],
    reducers: {
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
        }
    }
})

export const { commentCreate, commentDelete } = CommentsSlice.actions
export default CommentsSlice.reducer