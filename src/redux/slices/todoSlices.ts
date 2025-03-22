import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoList } from '../../types/todo';

const initialState: TodoList = [{
  id: '1',
  title: 'test',
  description: 'test',
  dueDate: 'test',
  isCompleted: false,
}];

const todoSlices = createSlice({
  name: 'todoList',
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    toggleCompletion: (state, action: PayloadAction<string | undefined>) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    deleteTodo: (state, action: PayloadAction<string | undefined>) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleCompletion, deleteTodo } = todoSlices.actions;

export const todoListReducers =  todoSlices.reducer;
