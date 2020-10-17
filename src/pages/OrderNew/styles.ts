import styled from 'styled-components';
import { ReturnIcon, CookerIcon, SearchIcon } from '../../styles/Icons'

export const Container = styled.div`
	display: grid;
	grid-template-columns: 342px 1fr 1fr;
	min-height: 100vh;
	max-height: 100vh;
	min-height: 100%;
	max-height: 100%;

	@media (max-width: 1000px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
`;

export const WrapperOne = styled.div`
	@media (max-width: 1000px) {
			display:none;
	}
`;

export const WrapperTwo = styled.div`
	@media (max-width: 800px) {
			display:none;
	}

	padding: 72px 40px;
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
	width:100%;
	display:flex;
	flex-direction: column;
	justify-content:center;
	align-items:center;
	text-align:center;
`;

export const WrapperTree = styled.div`
	padding: 95px 40px 0px 40px;
	background: var(--gray);

	> span {
		display:block;
		margin-top: 24px;
		font-size: 16px;
		line-height: 24px;
		color: rgba(0, 0, 0, 0.64);
	}
	p {
		margin-top: 24px;
		font-size: 16px;
		line-height: 24px;
		color: rgba(0, 0, 0, 0.56)
	}

	> h6 {
		margin-top: 24px;
		color: rgba(0, 0, 0, 0.54);
	}

	div:nth-child(0) {
		margin-top: 84px;
	}

`;

export const Product = styled.div`
	border-bottom: 2px solid rgba(0, 0, 0, 0.08);

	a {
		color:inherit;
	}

	div {
		margin-top: 24px;
	}

	section {
		display:flex;
		align-items:center;
		justify-content: space-between;
		align-content:center;
		padding: 10px;

		span {
			display: block;
			font-size: 16px;
			color: rgba(0, 0, 0, 0.54);
		}

		h6 {
			flex:1;
			padding: 0 16px;
		}
	}
`;

export const OrderInput = styled.div`
	margin-top: 10px;
	padding: 10px 0;
	border-bottom: 1px solid rgba(0, 0, 0, 0.34);
	display:flex;


	input {
		padding: 0 11px;
	}
`;

export const Progreessbar = styled.div`
	margin-top: 8px;
	border-radius: 5px;
	display: flex;
	width:100%;
	height: 12px;
	background: rgba(0, 0, 0, 0.08);

	div:nth-child(1)  {
		width: 33.3%;
		background: #FF8822;
		border-radius: 5px 5px;
	}
`;

export const IconSearch = styled(SearchIcon)``;
export const IconReturn = styled(ReturnIcon)``;
export const IconCooker = styled(CookerIcon)`
	text-align: center;
`;


