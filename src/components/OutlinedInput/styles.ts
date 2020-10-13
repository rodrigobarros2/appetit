import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

	> input {
		&::placeholder {
			color: blue;
		}
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
}
`;
