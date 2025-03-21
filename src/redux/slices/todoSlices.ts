/* eslint-disable @typescript-eslint/no-shadow */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoList } from '../../types/todo';
// import { persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const todoListPersistConfig = {
//   key: 'todoList',
//   storage: AsyncStorage,
// };

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

export const { addTodo, toggleCompletion, deleteTodo } = todoSlices.actions;

export const todoListReducers =  todoSlices.reducer;
// const persistedTodoListReducers = persistReducer(todoListPersistConfig, todoListReducers);
// export default persistedTodoListReducers;
