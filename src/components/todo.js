import { useSelector, useDispatch } from 'react-redux';
import { Card, Container, Row, Button } from 'react-bootstrap';
import { getUserTodos, changeState } from '../features/todos/toDoDucks';
import { useEffect } from 'react';
import styled from 'styled-components';

export default function TodoComponent({ todos, loading }) {
	const dispatch = useDispatch();

	function cambiarEstado(id, completed) {
		dispatch(changeState({ id, completed }));
	}

	return (
		<ContainerTodoSC>
			<Container>
				<Row>
					{todos.map(function (todo, index) {
						return (
							<Card
								bg={todo.completed ? 'secondary' : 'info'}
								key={todo.id}
								text='white'
								style={{ width: '18rem' }}
								className='mx-auto my-2'
							>
								<Card.Header>
									{todo.completed
										? 'Tarea realizada'
										: 'Sin realizar'}
								</Card.Header>
								<Card.Body>
									<Card.Title>{todo.id}</Card.Title>
									<Card.Text>{todo.title}</Card.Text>
								</Card.Body>
								<div className='d-grid gap-2 mb-2'>
									<Button
										className='btn-block mr-1 mt-1'
										variant={
											todo.completed
												? 'info'
												: 'secondary'
										}
										onClick={() =>
											cambiarEstado(
												todo.id,
												!todo.completed
											)
										}
									>
										{todo.completed
											? 'Cambiar a Sin realizar'
											: 'Cambiar estado a realizada'}
									</Button>{' '}
								</div>
							</Card>
						);
					})}
				</Row>
			</Container>
		</ContainerTodoSC>
	);
}

const ContainerTodoSC = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 15px auto;
	margin-bottom: 1em;
	flex-direction: row;
    `;
