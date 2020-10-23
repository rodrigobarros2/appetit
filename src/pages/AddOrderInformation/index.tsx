import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clients } from '../SelectClients/styles';
import { IconReturn } from '../../components/NewOrder/styles';
import { InputRadio } from '../OrderDetailing/styles';
import { Container, GridOne, TotalWrapping, ClientsWrapping, GridTwo, ProductWrapping, GridTree, Progreessbar, SelectDate, ButtonFinish } from './styles';
import api from '../../services/api';
import Header from '../../components/Header';
import NewOrder from '../../components/NewOrder';
import Calendaricon from '../../assets/calendar.svg';
import OrderBox from '../../components/OrderBox';
import BarGray from '../../components/BarGray';

const AddOrderInformation: React.FC = () => {
	interface Clients {
		id: number;
		name: string;
		avatar: string;
	}

	const [clients, setClients] = useState<Clients[]>([]);

	useEffect(() => {
		async function loadApi() {
			const response = await api.get("clients");
			setClients(response.data);
			console.log(response.data);
		}
		loadApi();
	}, []);

	return (
		<Container>
			<GridOne>
				<Header />
			</GridOne>

			<GridTwo>
				<ProductWrapping>
					<Link to="/selectclients">
						<IconReturn />
					</Link>
					<NewOrder name="Novo pedido" />
					<OrderBox />
				</ProductWrapping>
				<BarGray />
				<ClientsWrapping>
					<span>Clients</span>
					<section>
						{clients.map((client) => (
							<Link to="addorderinformation" key={client.id}>
								<Clients >
									<img src={client.avatar} alt="" />
									<h6>{client.name}</h6>
								</Clients>
							</Link>
						))}
					</section>
				</ClientsWrapping>
				<BarGray />
				<TotalWrapping>
					<h6>Total</h6>
					<span>R$ 6,50</span>
				</TotalWrapping>
			</GridTwo>

			<GridTree>
				<NewOrder name="Informações para o pedido" />
				<p>Preencha as informações abaixo para concluir esta venda.</p>
				<span>Passo 3 de 3</span>
				<Progreessbar>
					<div></div>
				</Progreessbar>
				<h6>Qual o status de pagamento?</h6>
				<InputRadio>
					<div>
						<input type="radio" id="notPay" />
						<label htmlFor="notPay">Não está pago</label>
					</div>
					<div>
						<input type="radio" id="pay" />
						<label htmlFor="pay">Já está pago</label>
					</div>
				</InputRadio>
				<h6>Em qual data foi realizado?</h6>

				<SelectDate>
					<input type="text" placeholder="13/05/09" />
					<img src={Calendaricon} alt="" />
				</SelectDate>
				<Link to="orderfeedback">
					<ButtonFinish>
						<button>finalizar</button>
					</ButtonFinish>
				</Link>
			</GridTree>
		</Container>
	);
};

export default AddOrderInformation;
