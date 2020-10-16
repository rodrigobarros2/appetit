import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import { Container, WrapperOne, WrapperTwo, Button, IconSearch, DateInformation, OrderInformation, IconPlus, IconFilter, FilterOrder } from './styles';
import api from "../../services/api";
import OrangeLine from '../../components/OrangeLine';

interface Order {
	id: number;
	saleDate: string;
	saleValue: number;

	sale: Array<{
		id: number;
		name: string;
		avatar: string;
		description: string;
		value: number;
		i: string;
	}>
}

const Home: React.FC = () => {
	const [orders, setOrders] = useState<Order[]>([]);

	useEffect(() => {
		async function loadApi() {
			const responseOrders = await api.get("orders");
			setOrders(responseOrders.data);
			console.log(responseOrders.data);
		}
		loadApi();
	}, []);

	const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

	return (
		<Container>
			<WrapperOne>
				<Header />
			</WrapperOne>
			<WrapperTwo>
				<h3>Olá, Vanusa!</h3>
				<OrangeLine />

				<Button>
					<IconPlus />
					<p>fazer novo pedido</p>
				</Button>

				<FilterOrder>
					<IconSearch />
					<input type="text" placeholder="Procure o pedido aqui..."></input>
					<IconFilter />
				</FilterOrder>

				{orders.map((order) => (
					<div key={order.id}>
						<DateInformation>
							<h6>{order.saleDate},<span> Você vendeu </span>{formatter.format(order.saleValue)}</h6>
						</DateInformation>

						<OrderInformation>
							<img src={order.sale[0].avatar} alt="User" />
							<div>
								<h6>{order.sale[0].name}</h6>

								<p>{order.sale[0].description}</p>
							</div>
							<b>{formatter.format(order.sale[0].value)}</b>

						</OrderInformation>

						<OrderInformation>
							<img src={order.sale[1].avatar} alt="User" />
							<div>
								<h6>{order.sale[1].name}</h6>
								<p>{order.sale[1].description}</p>
							</div>
							<h6>{formatter.format(order.sale[1].value)}</h6>
						</OrderInformation>
					</div>
				))}

			</WrapperTwo >
		</Container >
	);
};

export default Home;

