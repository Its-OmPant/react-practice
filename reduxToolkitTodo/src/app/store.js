import { configureStore } from "@reduxjs/toolkit";

import TodoReducers from "../features/todo/todoSlice";

export const store = configureStore({
	reducer: TodoReducers,
});
