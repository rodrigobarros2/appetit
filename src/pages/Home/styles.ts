import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 342px 1fr;
	grid-template-rows: 1fr;

	height: 100%;
	width: 100%;

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

`;

export const Button = styled.button`
	width: 100%;
	height: 200px;
	border: 1px solid red;
`;
