import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Product, DivCooker, OrderInput, WrapperOne, WrapperTwo, WrapperTree, IconCooker, IconSearch, IconReturn, Progreessbar } from './styles';

import NewOrder from '../../components/NewOrder';
import Header from '../../components/Header';

import api from '../../services/api';

type Products = {
	id: number;
	nameproduct: string
	name: string;
	imgIten: string;
	price: number;
}

const OrderNew: React.FC = () => {

	const [products, setProducts] = useState<Products[]>([]);

	useEffect(() => {
		async function loadApi() {
			const response = await api.get("products");
			setProducts(response.data);
			console.log(response.data);
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
				<Link to="/ordersplaced">
					<IconReturn />
				</Link>
				<NewOrder name="Novo pedido" />
				<DivCooker>
					<IconCooker />
					<p>Acompanhe aqui um resumo desta venda.</p>
				</DivCooker>
			</WrapperTwo>

			<WrapperTree>
				<NewOrder name="Informações para o pedido" />
				<p>Preencha as informações abaixo para concluir esta venda.</p>
				<span>Passo 1 de 3</span>

				<Progreessbar>
					<div></div>
				</Progreessbar>

				<h6>O que você está vendendo?</h6>

				<OrderInput>
					<IconSearch />
					<input type="text" placeholder="Procure o produto aqui..." />
				</OrderInput>

				{products.map((product) => (
					<Product key={product.id}>
						<div>
							<h6>{product.nameproduct}</h6>
						</div>
						<Link to="/orderdetailing">
							<section>
								<img src={product.imgIten} alt="" />
								<h6>{product.name}</h6>
								<span>{formatter.format(product.price)}</span>
							</section>
						</Link>
					</Product>
				))}
			</WrapperTree>
		</Container>
	);
};

export default OrderNew;
