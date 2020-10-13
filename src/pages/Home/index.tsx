import React from 'react';

import { Container } from '../_layout/index';
import { WrapperOne, WrapperTwo, WrapperTree } from './styles';

const Home: React.FC = () => {
	return (
		<Container>
			<WrapperOne>
				<h1>Home</h1>
			</WrapperOne>
			<WrapperTwo>
				<h1>Home</h1>
			</WrapperTwo>
			<WrapperTree>
				<h1>Home</h1>
			</WrapperTree>
		</Container>
	);
};

export default Home;
