import React from 'react';
import { Link } from "react-router-dom";

import OutlinedInput from '../../components/OutlinedInput';
import { Container, Button } from './styles';


const Form: React.FC = () => {
	return (
		<Container>
			<form onSubmit={e => e.preventDefault()}>
				<OutlinedInput />
			</form>
			<section>
				<Link to="/"> recuperar minha senha</Link>
				<Button>
					entrar
				</Button>
			</section>
		</Container >
	);
};

export default Form;
