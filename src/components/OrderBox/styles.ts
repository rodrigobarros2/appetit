import styled from 'styled-components';

export const Container = styled.div`
	> div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 23px;
	}

	span {
		display: block;
		margin-top: 16px;
		font-size: 16px;
		line-height: 24px;
		color: rgba(0, 0, 0, 0.56);
	}

	b {
		font-size: 16px;
		line-height: 24px;
		color: rgba(0, 0, 0, 0.54);
	}

	h6 {
		flex: 1;
	}

	img {
		padding: 0 16px 0 0;
	}
`;
