import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
    flex-direction: column;
    align-items: center;
	width: 100%;

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	section {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	input:first-child {
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
		margin: 13px 0 37px 0;
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
	width:100%;

	input {
		width:100%;
	}

	.input-group {
		position: relative;
		width: 100%;
	}

	.input-group .input-area {
		outline: none;
		border: 1px solid rgba(0, 0, 0, 0.56);
		padding: 16px 13px;
		font-size: 18px;
		border-radius: 5px;
		width: 100%;
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

