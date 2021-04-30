import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import tasksSlice from "./slices/tasks";

const devTools = process.env.NODE_ENV !== "production";
const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({
  tasks: tasksSlice.reducer,
});

const store = configureStore({
  reducer,
  middleware,
  devTools,
});

export default store;
