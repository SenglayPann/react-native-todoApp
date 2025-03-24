import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../types/todo';

const emptyDraft = {
  title: '',
  description: '',
  dueDate: '',
  isCompleted: false,
};

let initialState = {
  isHasDraft: false,
  draft: emptyDraft,
};

const todoDraftSlice = createSlice({
  name: 'todoDraft',
  initialState: initialState,
  reducers: {
    setTodoDraft: (state, action: PayloadAction<Todo>) => {
      state.isHasDraft = true;
      state.draft = action.payload;
    },
    clearTodoDraft: (state) => {
      state.isHasDraft = false;
      state.draft = emptyDraft;
    },
  },
});

export const {setTodoDraft, clearTodoDraft} = todoDraftSlice.actions;

export const todoDraftReducers = todoDraftSlice.reducer;
