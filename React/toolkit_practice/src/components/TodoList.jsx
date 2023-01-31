import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteList, updateList } from "../store/TodoReducer";

const TodoList = ({ todoId, content }) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const onDelete = (e) => {
    e.preventDefault();
    dispatch(deleteList(todoId));
  };

  const onUpdate = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    dispatch(updateList({ todoId, content: inputValue }));
    setInputValue("");
  };

  return (
    <>
      <li>
        {todoId}.{content}
      </li>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="button" onClick={onDelete}>
        삭제
      </button>
      <button type="button" onClick={onUpdate}>
        수정
      </button>
    </>
  );
};

export default TodoList;
