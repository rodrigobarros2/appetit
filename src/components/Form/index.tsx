import React from 'react';
import { Link } from "react-router-dom";
import { Container, Button, OutlinedInput } from './styles';

const Form: React.FC = () => {
	return (
		<Container>
			<form onSubmit={e => e.preventDefault()}>
				<OutlinedInput>
					<div className="input-group">
						<input type="text" className="input-area" required id="inputField" />
						<label className="label">Email</label>
					</div>
					<div className="input-group">
						<input type="password" className="input-area" required id="Fieldinput" />
						<label className="label">Senha</label>
					</div>
				</OutlinedInput>
			</form>
			<section>
				<Link to="/"> recuperar minha senha</Link>
				<Link to="/ordersplaced">
					<Button className="btn">
						entrar
					</Button>
				</Link>
			</section>
		</Container >
	);
};

export default Form;
