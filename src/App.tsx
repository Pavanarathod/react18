import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import { useAppDispatch, useAppSelector } from "./core/app/hooks";
import { useGetAllPostsQuery } from "./core/query/postApi/postApi";
import { addTodo } from "./core/slice/todoSlice";

const App = () => {
  const reduxTodo = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();
  const [enteredValue, setEnteredValue] = useState("");
  const { data } = useGetAllPostsQuery();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(enteredValue));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          inputValue={enteredValue}
          onValueChange={(e) => setEnteredValue(e.target.value)}
        />
        <button type="submit">add todo</button>
      </form>
      {reduxTodo.length > 0 && (
        <>
          {reduxTodo.map((item: string, index: any) => (
            <p key={index}>{item}</p>
          ))}
        </>
      )}
    </>
  );
};

export default App;
