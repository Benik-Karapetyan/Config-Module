import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import tasksSlice from './slices/tasks';
import generalReducer from './slices/general';

const devTools = process.env.NODE_ENV !== 'production';
const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({
  general: generalReducer,
  tasks: tasksSlice.reducer,
});

const store = configureStore({
  reducer,
  middleware,
  devTools,
});

export default store;
