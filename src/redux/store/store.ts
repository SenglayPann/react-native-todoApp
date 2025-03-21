import { configureStore } from '@reduxjs/toolkit';
import rootPersistReducers from '../persist/rootPersist';
import { persistStore } from 'redux-persist';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: rootPersistReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const rootPersistor = persistStore(store);
export default store;
