import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo, Wrapper, IconMenu, IconUser, InconIndicador } from './styles';

const Header: React.FC = () => {
	return (
		<Container>
			<Wrapper>
				<div>
					<Logo />
				</div>
				<ul>
					<Link to="/home"><li><IconMenu />pedidos</li></Link>
					<li><InconIndicador />em abertos</li>
					<li>encerrados</li>
					<li><IconUser />clientes</li>
				</ul>
				<caption>Infoway Gestão em Saúde ©, 2019.</caption>
			</Wrapper>
		</Container >
	);
};

export default Header;
