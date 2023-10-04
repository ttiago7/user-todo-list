import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/todos/loginDucks';
import todoReducer from '../features/todos/toDoDucks.js';

export const store = configureStore({
	reducer: {
		user: loginReducer,
		todos: todoReducer,
	},
});
