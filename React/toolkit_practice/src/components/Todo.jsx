import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addList, getList } from "../store/TodoReducer";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoReducer);

  useEffect(() => {
    dispatch(getList());
  }, []);

  const onCreate = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    const newList = { content: inputValue };
    dispatch(addList(newList));
    setInputValue("");
  };

  return (
    <>
      <form action="" onSubmit={onCreate}>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todoList.map((todo) => (
          <TodoList key={todo.id} todoId={todo.id} content={todo.content} />
        ))}
      </ul>
    </>
  );
};

export default Todo;
