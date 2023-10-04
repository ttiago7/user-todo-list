//const
const dataInicial = {
	userId: null,
	usuario: '',
};

//consta types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

//reducer
export default function loginReducer(state = dataInicial, acction) {
	switch (acction.type) {
		case LOGIN:
			return {
				...state,
				userId: acction.payload.userId,
				usuario: acction.payload.usuario,
			};
		case LOGOUT:
			return {
				...state,
				userId: null,
				usuario: '',
			};
		default:
			return state;
	}
}

//accions
export const loginUser = (data) => async (dispatch, getState) => {
	const users = [
		{ userId: 1, usuario: 'usuario1', contraseña: 'usuario1' },
		{ userId: 2, usuario: 'usuario2', contraseña: 'usuario2' },
		{ userId: 3, usuario: 'usuario3', contraseña: 'usuario3' },
		{ userId: 4, usuario: 'usuario4', contraseña: 'usuario4' },
		{ userId: 5, usuario: 'usuario5', contraseña: 'usuario5' },
		{ userId: 6, usuario: 'usuario6', contraseña: 'usuario6' },
		{ userId: 7, usuario: 'usuario7', contraseña: 'usuario7' },
		{ userId: 8, usuario: 'usuario8', contraseña: 'usuario8' },
		{ userId: 9, usuario: 'usuario9', contraseña: 'usuario9' },
		{ userId: 10, usuario: 'usuario10', contraseña: 'usuario10' },
	];

	try {
		let resp = users.find(
			(user) =>
				user.usuario === data.usuario &&
				user.contraseña === data.contraseña
		);

		dispatch({
			type: LOGIN,
			payload: resp,
		});
		return resp;
	} catch (error) {
		console.error('An unexpected error happened in loginAccion:', error);
	}
};
