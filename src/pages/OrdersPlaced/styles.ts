import styled from 'styled-components';

import { PlusIcon, FilterIcon, SearchIcon } from '../../styles/Icons';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 342px 1fr;
	grid-template-rows: 1fr;

	@media (max-width: 1000px) {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
	}
`;

export const WrapperOne = styled.div`
	@media (max-width: 1000px) {
		display: none;
	}
`;

export const WrapperTwo = styled.div`
	margin: 0 40px;

	h3 {
		margin-top: 72px;
		line-height: 36px;
		color: rgba(0, 0, 0, 0.88);
	}

	a {
		color: inherit;
	}
`;

export const DateInformation = styled.div`
	display: flex;
	margin-top: 24px;

	span {
		color: #6e6e6e;
		font-weight: 200;
	}
`;

export const OrderInformation = styled.div`
	display: flex;
	justify-content: space-between;
	background: #ffffff;
	border-radius: 5px;
	box-shadow: 0px 0.5px 10px rgba(0, 0, 0, 0.1);
	align-items: center;
	padding: 17px;
	margin: 16px 0 20px;

	div {
		flex: 1;
	}

	img {
		border-radius: 50%;
		margin-right: 17px;
	}
`;

export const Button = styled.div`
	width: 100%;
	height: 56px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-transform: uppercase;
	background: #ffffff;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	font-weight: 600;
	font-size: 14px;
	line-height: 22px;
	color: rgba(0, 0, 0, 0.56);
	margin-top: 24px;

	p {
		flex: 1;
	}

	svg {
		margin: 20px;
	}
`;

export const FilterOrder = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid rgba(0, 0, 0, 0.34);
	margin-top: 24px;

	input {
		flex: 1;
		font-size: 16px;
		line-height: 24px;
		color: rgba(0, 0, 0, 0.54);
		border: none;
	}

	svg {
		margin: 10px 11px;
	}
`;

export const IconPlus = styled(PlusIcon)``;
export const IconSearch = styled(SearchIcon)``;
export const IconFilter = styled(FilterIcon)``;
