import styled from 'styled-components';

export const Container = styled.div`

	form {
		display:flex;
		flex-direction: column;
		position: relative;
		margin-bottom: 27px;
	}

	section {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	input {
		padding: 0 14px;
		margin-bottom: 24px;
		width:432px;
		height:56px;
		background: #FFFFFF;
		border: 1px solid rgba(0, 0, 0, 0.56);
		border-radius: 5px;
		font-size: 16px;
	}

	a {
		position: relative;
		display:block;
		margin: 60px 0 37px 0;
		text-decoration: none;
		font-weight: 600;
		font-size: 14px;
		line-height: 22px;
		text-transform: uppercase;
		color: rgba(0, 0, 0, 0.88);
	}
`;

export const Button = styled.button`
	width: 328px;
	height: 48px;
	background: var(--orange-disable);
	border-radius: 100px;
	text-transform: uppercase;
	color: #FFFFFF;
	display: flex;
    align-items: center;
    justify-content: center;
`;
