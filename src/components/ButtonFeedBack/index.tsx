import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from './styles';

interface CardProps {
	nameBtnOne: string;
	nameBtnTwoo: string;
}

const ButtonFeedBack: React.FC<CardProps> = (props) => {
	return (
		<Container>
			<p>Pedido feito com sucesso!</p>
			<Link to="/ordersplaced">
				<Button primary>{props.nameBtnOne}</Button>
			</Link>
			<Link to="/ordernew">
				<Button>{props.nameBtnTwoo}</Button>
			</Link>
		</Container>
	);
};

export default ButtonFeedBack;
