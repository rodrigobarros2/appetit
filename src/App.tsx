import React from 'react';

import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

import { OrderboxProvider } from './context/Orderbox';

const App: React.FC = () => (
	<>
		<OrderboxProvider>
			<Routes />
		</OrderboxProvider>
		<GlobalStyles />
	</>
);

export default App;
