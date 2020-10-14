import React from 'react';

import Header from '../../components/Header';
import { Container, WrapperOne, WrapperTwo, Button } from './styles';

const Home: React.FC = () => {
	return (
		<Container>
			<WrapperOne>
				<Header />
			</WrapperOne>

			<WrapperTwo>
				<Button>
					PROGRAMADOR MILHONÁRIO
				</Button>
			</WrapperTwo>
		</Container>
	);
};

export default Home;
