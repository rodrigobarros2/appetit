import styled from 'styled-components';

import { AppetitIcon } from '../../styles/Icons';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: var(--gray);
	height: 100%;
	width: 100%;
`;

export const Logo = styled(AppetitIcon)`
	width: 112px;
	height: 80px;
	margin-bottom: 40px;

	/* 	> path {
		fill: #f00;
	}

	&:hover > path {
		fill: #ff0;
	} */
`;

export const Wrapper = styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h3 {
		margin-bottom: 16px;
		text-align: center;
		color: rgba(0, 0, 0, 0.87);
	}

	p {
		margin-bottom: 115px;
		width:432px;
		text-align: center;
		color: rgba(0, 0, 0, 0.54);
	}

	span {
		color: rgba(0, 0, 0, 0.56);
		margin-top: 64px;
		font-size: 16px;
		line-height: 24px;
	}
`;
