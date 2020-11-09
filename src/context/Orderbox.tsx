import React, { createContext, useState, useContext } from 'react';

interface OrderBoxContext {
	count: number;
	observation: string;
	total: number;
	setCount: (value: number) => void;
	setObservation: (value: string) => void;
	setTotal: (value: number) => void;
}

const OrderBoxContext = createContext<OrderBoxContext>({} as OrderBoxContext);

export const OrderboxProvider: React.FC = ({ children }) => {
	const [count, setCount] = useState(1);
	const [observation, setObservation] = useState('');
	const [total, setTotal] = useState(0);

	return (
		<OrderBoxContext.Provider value={{ count, setCount, observation, setObservation, total, setTotal }}>
			{children}
		</OrderBoxContext.Provider>
	);
};

//criando um hook para usar nos componentes
export function useOrderBox() {
	const context = useContext(OrderBoxContext)
	//dentro do context de rotorno estao as variaveis que podem ser acessadas usando o useContext
	if (!context)
		throw new Error("useOrderBox deve ser usado em um OrderboxProvider");
	//desestruturação local
	const { count, setCount, observation, setObservation, total, setTotal } = context;
	return { count, setCount, observation, setObservation, total, setTotal };
}

