import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 342px 1fr 1fr;
	grid-template-rows: 1fr;
	height: 100%;

	@media (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`;


