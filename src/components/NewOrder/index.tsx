import React from 'react';
import OrangeLine from '../OrangeLine';

import { Container } from './styles';

type CardProps = {
	name: string
	a?: string;
}

const NewOrder: React.FC<CardProps> = ({name}) => {
	return (
		<Container>
			<h3>{name}</h3>
			<OrangeLine />
		</Container>
	);
};

export default NewOrder;
