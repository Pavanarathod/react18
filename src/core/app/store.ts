import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import postApi from "../query/postApi/postApi";
import todoSlice from "../slice/todoSlice";

const reducers = {
  [todoSlice.name]: todoSlice.reducer,
  [postApi.reducerPath]: postApi.reducer,
};

const createStore = () =>
  configureStore({
    reducer: combineReducers(reducers),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postApi.middleware),
  });

const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
