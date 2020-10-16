import React from 'react';
import { Link } from 'react-router-dom';
import OrangeLine from '../OrangeLine';

import { Container, IconReturn } from './styles';

type CardProps = {
	name: string
	a?: string;
}

const NewOrder: React.FC<CardProps> = ({ name }) => {
	return (
		<Container>
			<h3>{name}</h3>
			<OrangeLine />
		</Container>
	);
};

export default NewOrder;
