import React from 'react';
import { Button, Container } from './styles';

interface CardProps {
	nameBtnOne: string;
	nameBtnTwoo: string;
}

const ButtonFeedBack: React.FC<CardProps> = (props) => {

	return (
		<Container>
			<p>Pedido feito com sucesso!</p>
			<Button primary>{props.nameBtnOne}</Button>
			<Button>{props.nameBtnTwoo}</Button>
		</Container>
	);
};

export default ButtonFeedBack;
