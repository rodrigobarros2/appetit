import React from 'react';
import OrangeLine from '../OrangeLine';

import { Container, IconReturn } from './styles';

const NewOrder: React.FC = () => {
	return (
		<Container>
			<IconReturn />
			<h3>Novo pedido</h3>
			<OrangeLine />
		</Container>
	);
};

export default NewOrder;
