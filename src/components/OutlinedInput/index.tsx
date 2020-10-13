import React from 'react';

import { Container } from './styles';

const OutlinedInput: React.FC = () => {
	return (
		<Container>
			<div className="input-group">
				<input autoComplete="new-password" type="text" className="input-area" required id="inputField" />
				<label htmlFor="inputField" className="label">Email</label>
			</div>
			<div className="input-group">
				<input type="password" className="input-area" required id="inputField" />
				<label htmlFor="inputField" className="label">Senha</label>
			</div>
		</Container>
	);
};

export default OutlinedInput;
