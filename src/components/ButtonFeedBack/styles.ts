import styled from 'styled-components';

interface Props {
	primary?: boolean;
}

export const Container = styled.div`
	p {
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		line-height: 30px;
		color: rgba(0, 0, 0, 0.88);
	}
`;

export const Button = styled.button<Props>`
	background: ${props => props.primary ? "none" : "#FF8822"};
	color: ${props => props.primary ? "black" : "var(--white)"};
	border: ${props => props.primary ? "2px solid rgba(0, 0, 0, 0.88)" : "none"};
	margin: ${props => props.primary ? " 40px 16px 0 0" : "40px 0 0 16px"};
	text-transform: uppercase;
	width: 328px;
	height: 48px;
	border-radius: 100px;

	@media (max-width: 1100px) {
		display:flex;
		flex-direction: column;
		align-items:center;
		justify-content: center;
		margin: 16px 0px;
	}
`;
