import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NewTodo from './NewTodo';

function NavBar(props) {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(!show);

	const [cantidadPorPagina, setCantidadPorPagina] = useState(6);

	const onTrigger = () => {
		props.parentCallback(cantidadPorPagina);
	};

	return (
		<Navbar expand='lg' className='bg-body-tertiary'>
			<Container fluid>
				<Navbar.Brand href='#'>Todo List</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav
						className='me-auto my-2 my-lg-0'
						style={{ maxHeight: '100px' }}
						navbarScroll
					></Nav>
					<Form className='d-flex'>
						<Form.Control
							type='number'
							placeholder='Nº todos por pagina'
							className='me-2'
							aria-label='Search'
							value={cantidadPorPagina}
							onChange={(e) =>
								setCantidadPorPagina(e.target.value)
							}
						/>
						<Button variant='outline-success' onClick={onTrigger}>
							Mostrar
						</Button>
						<p>&nbsp;</p>
						<Button variant='outline-success' onClick={handleShow}>
							Nuevo
						</Button>
						{show ? (
							<NewTodo show={show} setShow={setShow} />
						) : null}
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
