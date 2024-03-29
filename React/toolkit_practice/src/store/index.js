import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { todoReducer } from "./TodoReducer";
import logger from "redux-logger";

const reducer = combineReducers({ todoReducer: todoReducer.reducer });

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});
