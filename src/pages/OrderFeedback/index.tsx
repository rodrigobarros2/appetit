import React from 'react';
import ButtonFeedBack from '../../components/ButtonFeedBack';
import Header from '../../components/Header';
import { CookerIcon } from '../../styles/Icons';

import { Container, GridOne, GridTwo } from './styles';

const OrderFeedback: React.FC = () => {
	return (
		<Container>
			<GridOne>
				<Header />
			</GridOne>
			<GridTwo>
				<CookerIcon />
				<ButtonFeedBack nameBtnOne="voltar para lista de pedidos" nameBtnTwoo="fazer novo pedido" />
			</GridTwo>
		</Container>
	);
};

export default OrderFeedback;
