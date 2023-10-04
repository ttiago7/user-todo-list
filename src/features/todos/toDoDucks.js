import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	all: [],
};

export const getUserTodos = createAsyncThunk(
	'todo/fetchTodo',
	async (userID) => {
		const resp = await axios.get(
			'https://jsonplaceholder.typicode.com/todos/'
		);

		const filtered = resp.data.filter(function (element) {
			return element.userId === userID;
		});

		return filtered;
	}
);

export const todoSlice = createSlice({
	name: 'todo',
	initialState,

	reducers: {
		changeState: (state, action) => {
			state = state.all.map((todo, index) => {
				if (todo.id === action.payload.id) {
					let newTodo = todo;
					newTodo.completed = action.payload.completed;
					return newTodo;
				}
				return todo;
			});
		},
		createNewTodo: (state, action) => {
			state = state.all.push(action.payload);
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(getUserTodos.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getUserTodos.fulfilled, (state, action) => {
				state.all = action.payload;
				state.status = 'idle';
			});
	},
});

export const { changeState, createNewTodo } = todoSlice.actions;

export default todoSlice.reducer;
