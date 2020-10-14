import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
	}

	html, body, #root {
		max-height: 100vh;
		max-width: 100vw;
		width: 100%;
		height: 100%;
	}

	body {
		font-style: normal;
		-webkit-font-smoothing: antialiased !important;
		font-family: Roboto, sans-serif;
		background: #FAFAFA;
	}

	button {
		cursor: pointer;
	}

	*, button, input {
		border: 0;
		background: none;
	}

	/* css variables */

	:root {
    --orange: #FF8822;
    --orange-disable: #FCD3B1;
    --white: #FFFFFF;
    --gray: #FAFAFA;
	}

	/* tipografia*/

	a {
		text-decoration: none;
	}

	h1 {
		font-size: 36px;
		font-weight: 400;
		line-height: 54px;
	}

	h2 {
		font-size: 32px;
		font-weight: 400;
		line-height: 48px;
	}

	h3 {
		font-size: 24px;
		font-weight: 400;
		line-height: 36px;
	}

	h4 {
		font-size: 20px;
		font-weight: 400;
		line-height: 30px;
	}

	h5 {
		font-size: 18px;
		font-weight: 400;
		line-height: 27px;
	}

	h6 {
		font-size: 16px;
		font-weight: 600;
		line-height: 24px;
	}

	button {
		font-size: 14px;
		font-weight: 600;
		line-height: 22px;
	}

	body {
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
	}

	caption {
		font-size: 12px;
		font-weight: 400;
		line-height: 18px;
	}
`;
