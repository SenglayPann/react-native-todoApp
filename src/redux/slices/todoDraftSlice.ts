import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../types/todo';

const initialState: Todo = {
  title: '',
  description: '',
  dueDate: '',
  isCompleted: false,
};

const todoDraftSlice = createSlice({
  name: 'todoDraft',
  initialState: initialState,
  reducers: {
    setTodoDraft: (state, action: PayloadAction<Todo>) => {
      state = action.payload;
    },
    clearTodoDraft: () => {
      return initialState;
    },
  },
});

export const {setTodoDraft, clearTodoDraft} = todoDraftSlice.actions;

export const todoDraftReducers = todoDraftSlice.reducer;