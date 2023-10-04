import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { createNewTodo } from '../features/todos/toDoDucks';

function NewTodo({ show, setShow }) {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos.all);
	const user = useSelector((state) => state.user);
	const handleClose = () => setShow(false);
	const [value, setValue] = useState('');

	const crearTodo = () => {
		if (value.value !== undefined) {
			const max = Math.max(...todos.map((o) => o.id));
			let newTodo = {
				userId: user.userId,
				id: max + 1,
				title: value.value,
				completed: false,
			};
			dispatch(createNewTodo(newTodo));
			handleClose();
		}
	};
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Crear nuevo todo</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group
							className='mb-3'
							controlId='exampleForm.ControlTextarea1'
							value={value}
							onChange={(e) =>
								setValue({ value: e.target.value })
							}
						>
							<Form.Label>Titulo</Form.Label>
							<Form.Control as='textarea' rows={3} />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Cerrar
					</Button>
					<Button variant='primary' onClick={crearTodo}>
						Crear
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default NewTodo;
