import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
	todos: [],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: nanoid(),
				title: action.payload,
			};
			state.todos.unshift(todo);
		},
		removeTodo: (state, action) => {
			let newArray = state.todos.filter((t) => t.id !== action.payload);
			state.todos = newArray;
		},
		updateTodo: (state, action) => {
			state.todos = state.todos.map((t) => {
				return t.id == action.payload.id
					? { ...t, title: action.payload.newTitle }
					: t;
			});
		},
	},
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
