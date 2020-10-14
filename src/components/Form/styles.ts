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

	a:first-child {
		position: relative;
		display:block;
		margin: 60px 0 30px 0;
		text-decoration: none;
		font-weight: 600;
		font-size: 12px;
		line-height: 22px;
		text-transform: uppercase;
		color: rgba(0, 0, 0, 0.88);
	}
`;

export const Button = styled.button`
	width: 328px;
	height: 48px;
	background: var(--orange);
	border-radius: 100px;
	text-transform: uppercase;
	color: #FFFFFF;
	display: flex;
    align-items: center;
    justify-content: center;
`;

/* OutlinedInput */

export const OutlinedInput = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%)
	}

	.input-group {
		position: relative;
	}

	.input-group .input-area {
		outline: none;
		border: 1px solid rgba(0, 0, 0, 0.56);
		padding: 16px 13px;
		font-size: 18px;
		border-radius: 5px;
	}

	.input-group .input-area:valid + .label {
		top: -8px;
		padding: 0 3px;
		font-size: 14px;
		color: rgba(0, 0, 0, 0.56);
	}

	.input-group .input-area:focus {
		border: 2px solid var(--orange);

	}

	.input-group .label {
		color: rgba(0, 0, 0, 0.87);
		font-size: 16px;
		font-family: Roboto, sans-serif;
		font-style: normal;
		font-weight: normal;
		position: absolute;
		top: 20px;
		left: 13px;
		background: var(--gray);
	}

	.input-group .input-area:focus + .label {
		top: -8px;
		padding: 0 3px;
		font-size: 14px;
		color: var(--orange);
		background: var(--gray);
	}
`;

