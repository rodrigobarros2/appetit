import React from 'react';
import CuzcuzIcon from '../../assets/cuzcuz.svg';
import { useCount } from '../../context/Count';
import { Container } from './styles';

const OrderBox: React.FC = () => {
	const { count } = useCount();

	return (
		<Container>
			<h4>Produtos</h4>
			<div>
				<img src={CuzcuzIcon} alt="" />
				<h6>{count}x Cuscuz completo</h6>
				<b>R$ 3,25</b>
			</div>
			<span>Não adicionar manteiga</span>
		</Container>
	);
};

export default OrderBox;
