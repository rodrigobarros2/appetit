import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 342px 1fr 1fr;
	height:100%;
	overflow: hidden;

	@media (max-width: 1200px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 900px) {
		display: grid;
		grid-template-columns: 1fr;
	}
`;

export const WrapperOne = styled.div`
	@media (max-width: 1200px) {
		display: none;
	}
`;

export const WrapperTwo = styled.div`
	padding: 72px 40px;
	background: var(--white);

	p {
		margin-top: 24px;
		font-size: 16px;
		line-height: 24px;
		color: rgba(0, 0, 0, 0.54);
	}

	@media (max-width: 900px) {
		display: none;
		grid-template-columns: 1fr;
	}
`;

export const WrapperTree = styled.div`
	padding: 72px 40px 12px;
	overflow-x: hidden;

	p{
		font-size: 16px;
		line-height: 24px;
		color: rgba(0, 0, 0, 0.56);
		margin-top: 8px;
	}

	div:nth-child(4) {
		display: flex;
		align-items:center;
		margin-top: 23px;

		b {
			font-size: 16px;
			line-height: 24px;
			color: rgba(0, 0, 0, 0.54);
		}

		h6 {
			flex:1;
		}

		img {
			padding: 0 16px 0 0 ;
		}
	}

	> span {
		display:block;
		margin-top: 24px;
		font-size: 16px;
		line-height: 24px;
		color: rgba(0, 0, 0, 0.64);
	}

	> h6 {
		margin-top: 24px;
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;
		color: rgba(0, 0, 0, 0.87);
	}

	label {
		font-size: 16px;
		line-height: 24px;
		color: rgba(0, 0, 0, 0.56);
	}

	> input {
		width: 100%;
		border: 1px solid rgba(0, 0, 0, 0.56);
		box-sizing: border-box;
		border-radius: 5px;
		height: 56px;
		margin-top: 24px;
		padding: 26px;
		font-size: 16px;
		line-height: 24px;
		color: rgba(0, 0, 0, 0.88);
		background: #FFFFFF;

		&::placeholder {
			font-size: 16px;
			color: rgba(0, 0, 0, 0.88);
			line-height: 24px;
		}
	}
`;

export const InputRadio = styled.div`
	margin-top: 16px;
	color: rgba(0, 0, 0, 0.56);

	div {
		display:flex;
		align-items:center;
		margin: 16px 0px;
		background: var(--white);
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
		border-radius: 5px;
		height: 56px;
		cursor: pointer;

		input {
			padding: 19px;
			margin: 19px;
			cursor: pointer;
		}

		label {
			padding: 19px 0;
			width: 100%;
			cursor: pointer;
		}
	}
`;

export const WrapperCounter = styled.div`
	align-self: end;
`;

export const OrderCounter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #fafafa;
	padding: 10px 40px;
	box-shadow: 9px 0px 10px rgba(0, 0, 0, 0.25);
`;

export const Counter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	button {
		padding: 10px 15px;;
	}

	button:nth-child(1) {
		color: rgba(0, 0, 0, 0.38);
		font-size: 35px;
		margin-top: -6px;
		font-family: Open Sans;
		font-style: normal;
	}

	button:nth-child(3) {
		color: var(--orange);
		font-size: 25px;
		font-family: Open Sans;
		font-style: normal;
	}
`;

export const BtnCounter = styled.div`
	display:flex;
	justify-content:center;
	background: #FF8822;
	border-radius: 5px;
	width: 203px;
	height: 48px;
	font-size: 14px;

	button {
		color: #FFFFFF;
	}
`;

export const Bar = styled.div`
	margin-top: 24px;
	height: 10px;
	background: rgba(0, 0, 0, 0.08);
	position: relative;
    width: 100%;
    height: 8px;

	&::before {
		content: "";
		position: absolute;
		left: -100%;
		top: 0;
		width: 100%;
		height: 8px;
		background: #e6e6e6;
	}

	&:after {
		content: "";
		position: absolute;
		right: -100%;
		top: 0;
		width: 100%;
		height: 8px;
		background: #e6e6e6;
	}
`;

export const ContainerTree = styled.div`
	display:grid;
	overflow-y: auto;
`;
