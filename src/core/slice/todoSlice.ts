import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface TodoState {
  todos: string[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos = [...state.todos, action.payload];
    },
  },
});

export const { addTodo } = todoSlice.actions;
export const selectTodo = (state: RootState) => state.todos.todos;
export default todoSlice;
