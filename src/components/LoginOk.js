import React, { useState, useEffect } from 'react';
import TodoComponent from './todo';
import Pagination from './Pagination';
import NavBar from './NavBar';
import { getUserTodos, changeState } from '../features/todos/toDoDucks';
import { useSelector, useDispatch } from 'react-redux';
import NewTodo from './NewTodo';

export default function ({ userId }) {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos.all);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(6);

	const handleCallback = (childData) => {
		setPostsPerPage(childData);
	};

	useEffect(() => {
		dispatch(getUserTodos(userId));
	}, []);

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = todos.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<>
			{/* <NewTodo /> */}
			<NavBar parentCallback={handleCallback} />
			<TodoComponent todos={currentPosts} loading={loading} />
			<Pagination
				postsPerPage={postsPerPage}
				totalPosts={todos.length}
				paginate={paginate}
			/>
		</>
	);
}
