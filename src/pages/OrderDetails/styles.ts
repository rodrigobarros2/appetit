import styled from 'styled-components';
import { ReturnIcon } from '../../styles/Icons';

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
				display:none;
		}
`;
export const WrapperTwo = styled.div`
	padding: 90px 40px 0px;

	a{
		color:inherit;
	}
`;

export const OrderInformation = styled.div`
	padding-top: 24px;

	h6 {
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;
		color: #000000;
	}

	div {
		margin-top: 14px;
		display:flex;
		height: 74px;
		align-items: center;
		background: #FFFFFF;
		box-shadow: 0px 0.5px 10px rgba(0, 0, 0, 0.1);
		border-radius: 5px;

		section {
			display: flex;
			flex-direction: column;
		}

		img {
			border-radius: 50%;
			padding: 0 16px;
		}

		span {
			font-size: 12px;
			line-height: 18px;
			color: rgba(0, 0, 0, 0.64);
		}
	}
`;

export const IconReturn = styled(ReturnIcon)``;
