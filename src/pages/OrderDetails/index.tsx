import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import NewOrder from '../../components/NewOrder';
import api from '../../services/api';

import {
	Container,
	IconReturn,
	OrderInformation,
	WrapperOne,
	WrapperTwo
} from './styles';

interface Orderdetails {
	id: number;
	date: string;
	name: string;
	price: number;
	imgIten: string;
}

const OrderDetails: React.FC = () => {
	const [orderdetails, setOrderdetails] = useState<Orderdetails[]>([]);

	useEffect(() => {
		async function loadApi() {
			const response = await api.get('orderdetails');
			setOrderdetails(response.data);
			console.log(response.data);
		}
		loadApi();
	}, []);

	const formatter = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	});

	return (
		<Container>
			<WrapperOne>
				<Header />
			</WrapperOne>

			<WrapperTwo>
				<Link to="/ordersplaced">
					<IconReturn />
					<NewOrder name="Pedidos de Luiz" />
				</Link>

				{orderdetails.map(orderdetail => (
					<div key={orderdetail.id}>
						<OrderInformation>
							<h6>{orderdetail.date}</h6>
							<div>
								<img src={orderdetail.imgIten} alt="User" />
								<section>
									<h6>{orderdetail.name}</h6>
									<span>
										{formatter.format(orderdetail.price)}
									</span>
								</section>
							</div>
						</OrderInformation>
					</div>
				))}
			</WrapperTwo>
		</Container>
	);
};

export default OrderDetails;
