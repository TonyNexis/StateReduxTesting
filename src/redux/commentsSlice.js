import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { spinnerDisplayOff, spinnerDisplayOn } from "./spinnerSlice";


const apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=10';
const apiUrlPost = 'https://jsonplaceholder.typicode.com/posts';

export const sendCommentToServer = createAsyncThunk('comments/sendCommentToServer', async (text) => {
  try {
    const response = await fetch(apiUrlPost, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const jsonData = await response.json();

    // Use the id from the server response as the comment id
    const comment = { id: jsonData.id, text };

    // You can return any data received from the server if needed
    return comment;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to inform the caller about the failure
  }
});


export const fetchComments = createAsyncThunk('comments/fetchComments', async (_, {dispatch}) => {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const jsonData = await response.json();

    const comments = jsonData.map(item => ({
      id: item.id,
      text: item.title
    }));
    dispatch(spinnerDisplayOff());
    return comments;
  } catch (error) {
    console.log(error);
  }
});

export const CommentsSlice = createSlice({
    name: 'comments',
    initialState: [],
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
    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.push(...action.payload)
        console.log('success status')
      })
      .addCase(fetchComments.pending, (state, action) => {
        console.log('pending status')
      })
      .addCase(fetchComments.rejected, (state, action) => {
        console.log('rejected status')
      })
      .addCase(sendCommentToServer.fulfilled, (state, action) => {
        console.log('Comment sent to server successfully:', action.payload);
        state.push(action.payload)
      })
      .addCase(sendCommentToServer.rejected, (state, action) => {
        console.log('Failed to send comment to server:', action.error);
      });
    },
})

export const { commentCreate, commentDelete, commentEdit, commentGet } = CommentsSlice.actions
export default CommentsSlice.reducer