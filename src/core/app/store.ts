import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoSlice from "../slice/todoSlice";

const reducers = {
  [todoSlice.name]: todoSlice.reducer,
};

const createStore = () =>
  configureStore({
    reducer: combineReducers(reducers),
  });

const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
