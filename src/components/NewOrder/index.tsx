import React from 'react';
import OrangeLine from '../OrangeLine';

import { Container } from './styles';

type CardProps = {
	name: string
	a?: string;
}

const NewOrder: React.FC<CardProps> = (props) => {
	return (
		<Container>
			<h3>{props}</h3>
			<OrangeLine />
		</Container>
	);
};

export default NewOrder;
