import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 342px 1fr 1fr;
	height:100%;

	@media (max-width: 1200px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 900px) {
		display: grid;
		grid-template-columns: 1fr;
	}
`;

export const GridOne = styled.div`
	@media (max-width: 1200px) {
			display:none;
	}
`;
export const GridTwo = styled.div`

	@media (max-width: 900px) {
		display:none;
	}
`;

export const GridTree = styled.div`
	padding: 51px 40px 0px;

	> p {
		margin-top: 24px;
	}

	> span {
		display:block;
		margin-top: 24px;
	}

	> h6 {
		margin-top: 24px;
	}
`;

export const ProductWrapping = styled.div`
	padding: 24px 40px;
`;

export const ClientsWrapping = styled.div`
	padding: 16px 40px;

	a{
		color:inherit;
	}
`;

export const TotalWrapping = styled.div`
	padding: 24px 40px 0 40px;
	display:flex;
	align-items: center;
	justify-content:space-between;
`;

export const Progreessbar = styled.div`
	margin-top: 8px;
	border-radius: 5px;
	display: flex;
	width:100%;
	height: 12px;
	background: rgba(0, 0, 0, 0.08);

	div:nth-child(1)  {
		width: 100%;
		background: #FF8822;
		border-radius: 5px 5px;
	}
`;

export const ButtonFinish = styled.div`
	margin-top: 40px;
	width: 100%;
	display:flex;
	justify-content:flex-end;

	button {
		width: 208px;
		text-transform: uppercase;
		color: #FFFFFF;
		height: 48px;
		background: #FF8822;
		border-radius: 100px;
	}
`;

export const SelectDate = styled.div`
	margin-top:24px;
	width: 100%;
	padding: 16px 20px 16px 16px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	box-sizing: border-box;
	border-radius: 5px;
	background: #FFFFFF;
	border-radius: 5px;
	display:flex;
	justify-content:space-between;

	&::placeholder{
	font-size: 16px;
	line-height: 24px;
	color: rgba(0, 0, 0, 0.88);
	}
`;

