import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 342px 1fr 1fr;
	height: 100%;
	overflow: hidden;

	@media (max-width: 1150px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 800px) {
		display: grid;
		grid-template-columns: 1fr;
	}
`;

export const WrapperOne = styled.div`
	@media (max-width: 1150px) {
			display:none;
	}
`;

export const WrapperTwo = styled.div`
	background: var(--white);

	@media (max-width: 800px) {
		display:none;
	}
`;

export const ContentOne = styled.div`
	padding: 40px 40px 0 40px;

	h4 {
		margin-top:24px;
	}

	span {
		display:block;
		margin-top: 16px;
		font-size: 16px;
		line-height: 24px;
		color: rgba(0, 0, 0, 0.56);
	}

	div:nth-child(4) {
		display: flex;
		align-items: center;
		justify-content: space-between;
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
			padding: 0 16px 0 0;
		}
	}
`;

export const ContentTwo = styled.div`
	margin-top: 16px;

	div{
		width: 100%;
		height: 8px;
		background: rgba(0, 0, 0, 0.08);
	}
`;

export const ContentTree = styled.div`
	padding: 24px 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	h4 {
		color: rgba(0, 0, 0, 0.88);
	}

	span {
		display: block;
		font-size: 20px;
		line-height: 30px;
		color: rgba(0, 0, 0, 0.56);
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
		width: 66.6%;
		background: #FF8822;
		border-radius: 5px 5px;
	}
`;

export const Clients = styled.div`
	display:flex;
	padding: 10px 0;
	align-items: center;
	border-bottom: 1px solid rgba(0, 0, 0, 0.08);
	cursor: pointer;

	img {
		margin-right: 16px;
	}
`;

export const WrapperTree = styled.div`
	padding: 40px 40px 0 40px;
	height: 100%;

	overflow-y: scroll;

	p{
		font-size: 16px;
		color: rgba(0, 0, 0, 0.56);
		margin-top: 8px;
	}

	span {
		display: block;
		margin-top: 24px;
		font-size: 16px;
		color: rgba(0, 0, 0, 0.64);
	}

	section {
		margin-top: 8px;

		a{
			color: inherit;
		}
	}

	> h6 {
		margin-top: 24px;
	}
`;

