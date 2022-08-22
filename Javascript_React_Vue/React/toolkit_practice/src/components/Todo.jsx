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
    console.log("몇번?");
  }, []);

  const onCreate = (e) => {
    e.preventDefault();
    if (inputValue) {
      const newList = { content: inputValue };
      dispatch(addList(newList));
      setInputValue("");
    } else {
      console.log("적으세요!");
    }
  };

  return (
    <form action="" onSubmit={onCreate}>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button type="submit">추가</button>
      <ul>
        {todoList.map((list) => (
          <TodoList key={list.id} listId={list.id} content={list.content} />
        ))}
      </ul>
    </form>
  );
};

export default Todo;
