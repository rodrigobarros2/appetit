import styled from 'styled-components';

import { AppetitIcon, MenuIcon, UserIcon, Indicador } from '../../styles/Icons';

export const Container = styled.div`
	background: var(--orange);
	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
	height:100%;
	position: fixed;
    width: 342px;
`;

export const Wrapper = styled.div`
	display:flex;
	height: 100%;
	flex-direction: column;
	justify-content: space-between;

	div {
		display:flex;
		justify-content: center;
	}

	ul{
		flex-grow: 1;
		cursor: pointer;
		list-style:none;
		display:flex;
		text-transform: uppercase;
		flex-direction: column;
		background:var(--orange);
	}

	li {
		display:flex;
		align-items: center;
		padding: 10px;
		margin: 2px 0;
		color: rgba(255, 255, 255, 0.54);
		padding-left: 40px;
		font-weight: 600;
		font-size: 14px;
		line-height: 22px;

		&:first-child{
			background: white;
			color: var(--orange);
			line-height: 2.5;
		}

		&:nth-child(2){
			color: var(--white);
			padding-left: 60px;
		}

		&:nth-child(3){
			padding-left: 79px;
		}

		&:nth-child(4){
			padding-top: 20px;
		}
	}

	p{
		width: 100%;
		font-size: 12px;
		line-height: 18px;
		font-weight: 400;
		text-align:center;
		margin-bottom: 40px;
		color: var(--white);
	}
`;

export const Logo = styled(AppetitIcon)`
	width: 112px;
	height: 80px;
	margin: 56px 0 80px;

	> path {
		fill: var(--white);
	}
`;

export const IconMenu = styled(MenuIcon)`
	margin-right: 28px;
`;

export const IconUser = styled(UserIcon)`
	margin-right: 28px;
`;

export const InconIndicador = styled(Indicador)`
	margin-right: 16px;
	> path {
		fill: var(--orange);
	}
`;

