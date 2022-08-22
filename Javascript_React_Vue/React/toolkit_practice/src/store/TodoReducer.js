import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getList = createAsyncThunk("GET_TODO", async () => {
  const response = await axios
    .get("http://localhost:8000/list")
    .then()
    .catch((err) => console.log(err));
  console.log(response);
  return response.data;
});

export const addList = createAsyncThunk("ADD_TODO", async (newList) => {
  const response = await axios.post("http://localhost:8000/list", newList);
  return response.data;
});

export const deleteList = createAsyncThunk("DELETE_TODO", async (listId) => {
  const response = await axios.delete(`http://localhost:8000/list/${listId}`);
  return listId;
});

export const updateList = createAsyncThunk(
  "UPDATE_LIST",
  async ({ listId, content }) => {
    const response = await axios.put(`http://localhost:8000/list/${listId}`, {
      content: content,
    });
    return { listId, content };
  }
);

export const todoReducer = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getList.fulfilled]: (state, { payload }) => [...payload],
    [addList.fulfilled]: (state, { payload }) => [...state, payload],
    [deleteList.fulfilled]: (state, { payload }) => window.location.reload(),
    [updateList.fulfilled]: (state, { payload }) => {
      return state.map((list) => {
        if (list.id === payload.listId) {
          return { ...list, content: payload.content };
        } else {
          return list;
        }
      });
    },
  },
});
