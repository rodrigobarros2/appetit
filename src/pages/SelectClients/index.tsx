import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReturnIcon } from '../../styles/Icons';
import { IconSearch, OrderInput } from '../OrderNew/styles';
import Header from '../../components/Header';
import NewOrder from '../../components/NewOrder';
import api from '../../services/api';
import OrderBox from '../../components/OrderBox';

import {
	Clients,
	Container,
	ContentOne,
	ContentTree,
	ContentTwo,
	Progreessbar,
	WrapperOne,
	WrapperTree,
	WrapperTwo
} from './styles';

interface Client {
	id: number;
	name: string;
	avatar: string;
}

const SelectClients: React.FC = () => {
	const [clients, setClients] = useState<Client[]>([]);

	useEffect(() => {
		async function loadApi() {
			const response = await api.get('clients');
			setClients(response.data);
			console.log(response.data);
		}
		loadApi();
	}, []);

	return (
		<Container>
			<WrapperOne>
				<Header />
			</WrapperOne>

			<WrapperTwo>
				<ContentOne>
					<Link to="/orderdetailing">
						<ReturnIcon />
					</Link>
					<NewOrder name="Novo pedido" />
					<OrderBox />
				</ContentOne>

				<ContentTwo>
					<div />
				</ContentTwo>

				<ContentTree>
					<h4>Total</h4>
					<span>R$ 6,50</span>
				</ContentTree>
			</WrapperTwo>

			<WrapperTree>
				<NewOrder name="Informações para o pedido" />
				<p>Preencha as informações abaixo para concluir esta venda.</p>
				<span>Passo 2 de 3</span>
				<Progreessbar>
					<div />
				</Progreessbar>
				<h6>Para quem você está vendendo?</h6>
				<OrderInput>
					<IconSearch />
					<input
						type="text"
						placeholder="Procure o cliente aqui..."
					/>
				</OrderInput>
				<section>
					{clients.map(client => (
						<Link to="addorderinformation" key={client.id}>
							<Clients>
								<img src={client.avatar} alt="" />
								<h6>{client.name}</h6>
							</Clients>
						</Link>
					))}
				</section>
			</WrapperTree>
		</Container>
	);
};

export default SelectClients;
