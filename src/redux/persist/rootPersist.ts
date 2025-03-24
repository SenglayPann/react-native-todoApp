import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import { todoListReducers } from '../slices/todoSlices';
import { todoDraftReducers } from '../slices/todoDraftSlice';
import { persistReducer } from 'redux-persist';

const rootPersistConifg = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['todoList', 'todoDraft'],
};

const combinedReducers = combineReducers({
  todoList: todoListReducers,
  todoDraft: todoDraftReducers,
});

const rootPersistReducers = persistReducer(rootPersistConifg, combinedReducers);

export default rootPersistReducers;
