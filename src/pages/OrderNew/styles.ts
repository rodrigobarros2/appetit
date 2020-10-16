import styled from 'styled-components';
import { ReturnIcon, CookerIcon, SearchIcon } from '../../styles/Icons'

export const Container = styled.div`
	display: grid;
	grid-template-columns: 342px 1fr 1fr;
	grid-template-rows: 1fr;
	min-height: 100vh;
	max-height: 100vh;
	min-height: 100%;
	max-height: 100%;
`;

export const WrapperOne = styled.div`
`;

export const WrapperTwo = styled.div`
	padding: 40px 0px 0 40px;
	background: var(--white);

	a{
		color: inherit;
	}

	p {
		margin-top: 24px;
		font-size: 16px;
		line-height: 24px;
		color: rgba(0, 0, 0, 0.54);
	}
`;

export const DivCooker = styled.div`
	margin-top: 110px;
	flex-direction: column;
	justify-content:center;
	display:flex;
	align-items:center;
	text-align:center;
`;

export const WrapperTree = styled.div`
	background: var(--gray);
`;

export const IconSearch = styled(SearchIcon)`

`;

export const IconReturn = styled(ReturnIcon)`

`;

export const IconCooker = styled(CookerIcon)`
	text-align: center;
`;

export const Product = styled.div`
`;


