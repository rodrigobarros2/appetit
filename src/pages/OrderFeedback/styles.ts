import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 342px 1fr;
	height: 100%;

	@media (max-width: 728px) {
		display: grid;
		grid-template-columns: 1fr;
	}
`;

export const GridOne = styled.div`
	@media (max-width: 728px) {
		display:none;
	}
`;

export const GridTwo = styled.div`
	margin-top: -100px;
	text-align: center;
	display:flex;
	flex-direction: column;
	align-items:center;
	justify-content: center;

	p {
		display:block;
		margin: 30px 0 70px;
	}

	button > {
		margin:20px;
	}
`;

