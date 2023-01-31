import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getList = createAsyncThunk("GET_TODO", async () => {
  const response = await axios.get("http://localhost:8000/list");
  return response.data;
});

export const addList = createAsyncThunk("ADD_TODO", async (newTodo) => {
  const response = await axios.post("http://localhost:8000/list", newTodo);
  return response.data;
});

export const deleteList = createAsyncThunk("DELETE_TODO", async (todoId) => {
  await axios.delete(`http://localhost:8000/list/${todoId}`);
  return todoId;
});

export const updateList = createAsyncThunk(
  "UPDATE_LIST",
  async ({ todoId, content }) => {
    await axios.put(`http://localhost:8000/list/${todoId}`, {
      content: content,
    });
    return { todoId, content };
  }
);

export const todoReducer = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getList.fulfilled]: (state, { payload }) => [...payload],
    [addList.fulfilled]: (state, { payload }) => [...state, payload],
    [deleteList.fulfilled]: (state, { payload }) =>
      state.filter((todo) => todo.id !== payload),
    [updateList.fulfilled]: (state, { payload }) =>
      state.map((todo) => {
        if (todo.id === payload.todoId) {
          return { ...todo, content: payload.content };
        } else {
          return todo;
        }
      }),
  },
});
