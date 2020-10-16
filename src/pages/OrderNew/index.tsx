import React from 'react';

import NewOrder from '../../components/NewOrder';
import Header from '../../components/Header';

import { Container, WrapperOne, WrapperTwo, WrapperTree, IconCooker } from './styles';

const OrderNew: React.FC = () => {
	return (
		<Container>
			<WrapperOne>
				<Header />
			</WrapperOne>

			<WrapperTwo>
				<NewOrder />
				<div>
					<IconCooker />
					<p>Acompanhe aqui um resumo desta venda.</p>
				</div>
			</WrapperTwo>

			<WrapperTree>
				<NewOrder />
			</WrapperTree>
		</Container>
	);
};

export default OrderNew;
