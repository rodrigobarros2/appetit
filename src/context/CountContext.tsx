import React, { createContext } from 'react';

interface CountContextState {
	numero: number;
}

export const CountContext = createContext<CountContextState>({} as CountContextState);

export const CountProvider: React.FC = ({ children }) => {
	return (
		<CountContext.Provider value={{ numero: 1 }}>
			{children}
		</CountContext.Provider>
	);
}
