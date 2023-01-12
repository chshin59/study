import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteList, updateList } from "../store/TodoReducer";

const TodoList = ({ listId, content }) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const onDelete = (e) => {
    e.preventDefault();
    dispatch(deleteList(listId));
  };

  const onUpdate = (e) => {
    e.preventDefault();
    if (inputValue) {
      dispatch(updateList({ listId, content: inputValue }));
      setInputValue("");
    } else {
      console.log("다시 적으세요!");
    }
  };

  return (
    <>
      <li>
        {listId}.{content}
      </li>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
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
