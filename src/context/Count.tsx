import React, { createContext, useState, useContext } from 'react';

interface CountContext {
	count: number;
	setCount: (value: number) => void;
}

const CountContext = createContext<CountContext>({} as CountContext);

export const CountProvider: React.FC = ({ children }) => {
	const [count, setCount] = useState(1);

	return (
		<CountContext.Provider value={{ count, setCount }}>
			{children}
		</CountContext.Provider>
	);
};

//criando um hook para usar nos componentes
export function useCount() {
	const context = useContext(CountContext)

	//dentro do context de rotorno estao as variaveis que podem ser acessadas usando o useAuth
	if (!context)
		throw new Error("useCount deve ser usado em um CountProvider");
	const { count, setCount } = context;
	return { count, setCount };
}
