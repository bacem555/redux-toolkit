import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Math.random() * 100,
        player: action.payload.player,
        completed: false,
      };
      state.push(newTodo);
    },
    removeTodo: (state, action) => {
      const idToRemove = action.payload.id;
      return state.filter((todo) => todo.id !== idToRemove);
    },
    justCompleted: (state, action) => {
      const idToCompleted = action.payload.id;
      const todoToCompleted = state.find((todo) => todo.id === idToCompleted);
      if (todoToCompleted) {
        todoToCompleted.completed = !todoToCompleted.completed;
      }
    },
    
  },
});

export const { addTodo, removeTodo, justCompleted } = todoSlice.actions;

export default todoSlice.reducer;
