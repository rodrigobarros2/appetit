import React, { useEffect, useState } from 'react';

import NewOrder from '../../components/NewOrder';
import Header from '../../components/Header';

import { Container, Product, DivCooker, WrapperOne, WrapperTwo, WrapperTree, IconCooker, IconSearch, IconReturn } from './styles';
import api from '../../services/api';
import { Link } from 'react-router-dom';

type Products = {
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
					<NewOrder name="Novo pedido" />
				</Link>

				<DivCooker>
					<IconCooker />
					<p>Acompanhe aqui um resumo desta venda.</p>
				</DivCooker>
			</WrapperTwo>

			<WrapperTree>
				<NewOrder name="Informações para o pedido" />
				<text>Preencha as informações abaixo para concluir esta venda.</text>
				<span>Passo 1 de 3</span>
				<div>progreessbar</div>
				<h6>O que você está vendendo?</h6>
				<div>
					<IconSearch />
					<input type="text" placeholder="Procure o produto aqui..." />
				</div>

				{products.map((product) => (
					<Product>
						<h6>{product.nameproduct}</h6>
						<h6>{product.name}</h6>
						<img src={product.imgIten} alt="" />
						<span>{formatter.format(product.price)}</span>
					</Product>
				))}
			</WrapperTree>
		</Container>
	);
};

export default OrderNew;
