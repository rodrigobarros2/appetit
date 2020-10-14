import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-template-rows: 1fr;
	min-height: 100vh;
	max-height: 100vh;
	min-height: 100%;
	max-height: 100%;
`;

export const WrapperOne = styled.div`
	background: blue;
`;

export const WrapperTwo = styled.div`
	background: red;
`;
