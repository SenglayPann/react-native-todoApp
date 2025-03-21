import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../types/todo';
// import { persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const todoDraftPersistconfig = {
//   key: 'todoDraft',
//   storage: AsyncStorage,
// };

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
// const persistedTodoDraftReducers = persistReducer(todoDraftPersistconfig, todoDraftReducers);
// export default persistedTodoDraftReducers;
