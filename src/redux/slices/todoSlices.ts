import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoList } from '../../types/todo';

const initialState: TodoList = []

const todoSlices = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    toggleCompletion: (state, action: PayloadAction<string>) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { toggleCompletion, deleteTodo } = todoSlices.actions;

export default todoSlices.reducer;
