import React from 'react';

import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

import { CountProvider } from './context/Count';

const App: React.FC = () => (
	<>
		<CountProvider>
			<Routes />
		</CountProvider>
		<GlobalStyles />
	</>
);

export default App;
