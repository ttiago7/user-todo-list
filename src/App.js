import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginComponent from './components/login';

import LoginOK from './components/LoginOk';

function App() {
	const user = useSelector((state) => state.user);
	return (
		<>
			{user.userId ? (
				<>
					<LoginOK userId={user.userId} />
					{/* <TodoComponent userId={user.userId} />{' '}
					<PaginationComponent />*/}
				</>
			) : (
				<LoginComponent />
			)}
		</>
	);
}

export default App;
