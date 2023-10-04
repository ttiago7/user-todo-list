import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as LoginComponents from './LoginComponents';
import { loginUser } from '../features/todos/loginDucks';
import styled from 'styled-components';

export default function LoginComponent() {
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data, e) => {
		dispatch(loginUser(data));
	};

	return (
		<ContainerRoot>
			<LoginComponents.ContainerSC>
				<LoginComponents.SignInContainerSC>
					<LoginComponents.FormSC>
						<LoginComponents.TitleSC>
							Ingresa
						</LoginComponents.TitleSC>
						<LoginComponents.InputSC
							{...register('usuario', { required: true })}
							type='text'
							placeholder='Usuario'
						/>
						<LoginComponents.InputSC
							{...register('contraseña', { required: true })}
							type='password'
							placeholder='Contraseña'
						/>

						<LoginComponents.AnchorSC href='#'>
							Olvidaste tu contraseña?
						</LoginComponents.AnchorSC>
						<LoginComponents.ButtonSC
							onClick={handleSubmit(onSubmit)}
						>
							Ingresar
						</LoginComponents.ButtonSC>
					</LoginComponents.FormSC>
				</LoginComponents.SignInContainerSC>

				<LoginComponents.OverlayContainerSC>
					<LoginComponents.OverlaySC>
						<LoginComponents.RightOverlayPanelSC>
							<LoginComponents.TitleSC>
								Bienvenido a ToDo list!
							</LoginComponents.TitleSC>
							<LoginComponents.ParagraphSC>
								Ingresa como usuario y contraseña uno de los
								siguientes datos, usuario1, usuario2...
								usuario10.
							</LoginComponents.ParagraphSC>
						</LoginComponents.RightOverlayPanelSC>
					</LoginComponents.OverlaySC>
				</LoginComponents.OverlayContainerSC>
			</LoginComponents.ContainerSC>
		</ContainerRoot>
	);
}

export const ContainerRoot = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 100vh;
    margin: -20px 0 50px;
    `;
