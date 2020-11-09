import React from 'react';
import CuzcuzIcon from '../../assets/cuzcuz.svg';
import { useOrderBox } from '../../context/Orderbox';
import { Container } from './styles';

const OrderBox: React.FC = () => {
	const { count, observation } = useOrderBox();

	return (
		<Container>
			<h4>Produtos</h4>
			<div>
				<img src={CuzcuzIcon} alt="" />
				<h6>{count}x Cuscuz completo</h6>
				<b>R$ 3,25</b>
			</div>
			<span>{observation}</span>
		</Container>
	);
};

export default OrderBox;
