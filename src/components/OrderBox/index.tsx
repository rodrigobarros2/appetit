import React from 'react';
import CuzcuzIcon from '../../assets/cuzcuz.svg';

import { Container } from './styles';

const OrderBox: React.FC = () => {
	return (
		<Container>
			<h4>Produtos</h4>
			<div>
				<img src={CuzcuzIcon} alt="" />
				<h6>2x Cuscuz completo</h6>
				<b>R$ 3,25</b>
			</div>
			<span>Não adicionar manteiga</span>
		</Container >
	);
};

export default OrderBox;
