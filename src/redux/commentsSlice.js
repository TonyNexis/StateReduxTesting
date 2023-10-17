import { createSlice, nanoid } from "@reduxjs/toolkit";

export const CommentsSlice = createSlice({
    name: 'comments',
    initialState: [{id: 'BGMGYc4NYCSpK87Bw9OLf', text: 'test comment'}],
    reducers: {
      commentGet: {
        reducer: (state, action) => {
            // Устанавливаем данные из action.payload в состояние
            // state.push(action.payload)
            console.log(action)

        },
        prepare: async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
                const json = await response.json();
                
                console.log(json)
                return {
                    payload: json
                };
            } catch (error) {
                console.error('Error fetching data:', error);
                return {
                    payload: [] // Если возникла ошибка при загрузке данных, возвращаем пустой массив
                };
            }
        },
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