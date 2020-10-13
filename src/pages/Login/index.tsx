import React from 'react';

import { Container, Logo, Wrapper } from './styles';

import Form from '../../components/Form';

const Login: React.FC = () => (
	<Container>
		<Wrapper>
			<Logo />
			<h3>Seja bem-vindo!</h3>
			<p>
				Nós sabemos a importância de estar sempre de barriga cheia e o
				quanto isso pode ajudar no seu dia.
			</p>
			<Form />
			<caption>
				Infoway Gestão em Saúde ©, 2019.
			</caption>
		</Wrapper>
	</Container>
);

export default Login;
