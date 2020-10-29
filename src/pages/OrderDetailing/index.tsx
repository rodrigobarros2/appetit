import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import NewOrder from '../../components/NewOrder';
import { IconReturn } from '../../components/NewOrder/styles';
import { DivCooker, IconCooker } from '../OrderNew/styles';
import CuzcuzIcon from '../../assets/cuzcuz.svg';
import RadioButtonOn from '../../assets/radio-button-on.svg';

import { Container, WrapperOne, InputRadio, WrapperTree, WrapperTwo, OrderCounter, Counter, BtnCounter, ContainerTree, WrapperCounter, Bar } from './styles';

const OrderDetailing: React.FC = () => {
	const [count, setCount] = useState(1);
	const [option, setOption] = useState('');
	return (
		<Container>
			<WrapperOne>
				<Header />
			</WrapperOne>
			<WrapperTwo>
				<Link to="/ordernew">
					<IconReturn />
				</Link>
				<NewOrder name="Novo pedido" />
				<DivCooker>
					<IconCooker />
					<p>Acompanhe aqui um resumo desta venda.</p>
				</DivCooker>
			</WrapperTwo>
			<ContainerTree>
				<WrapperTree>
					<IconReturn />
					<NewOrder name="Detalhes do pedido" />
					<p>Aproveite para adicionar alguma observação para este pedido, caso queira.</p>
					<div>
						<img src={CuzcuzIcon} alt="" />
						<div>
							<h6>Cuscuz completo</h6>
							<b>R$ 3,25</b>
						</div>
					</div>
					<h6>Opções</h6>
					<p>Escolha dentre as opções de massas abaixo.</p>
					<InputRadio>
						<div>
							<img src={RadioButtonOn} alt="" />
							<input id="milho" type="radio" value={option}
								onChange={(e) => setOption(e.target.value)} />
							<label htmlFor="milho">Milho</label>
						</div>
						<div>
							<img src={RadioButtonOn} alt="" />
							<input id="arroz" type="radio" value={option}
								onChange={(e) => setOption(e.target.value)} />
							<label htmlFor="arroz">Arroz</label>
						</div>
					</InputRadio>
					<Bar />
					<h6>Observações</h6>
					<input type="text" placeholder="Observações" />
				</WrapperTree>

				<WrapperCounter>
					<OrderCounter>
						<Counter>
							<button value={count} type="button" onClick={() => setCount(count - 1)}> - </button>
							<p>{count}</p>
							<button value={count} type="button" onClick={() => setCount(count + 1)}> + </button>
						</Counter>

						<Link to="selectclients">
							<BtnCounter>
								<button> Adicionar</button>
							</BtnCounter>
						</Link>
					</OrderCounter>
				</WrapperCounter>

			</ContainerTree>
		</Container>
	);
};

export default OrderDetailing;
