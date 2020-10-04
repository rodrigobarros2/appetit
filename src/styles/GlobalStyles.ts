import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html, body #root {
		max-height: 100vh;
		max-width: 100vw;
		width: 100%;
		height: 100%;
	}

	button {
		cursor: pointer;
	}

	*, button, input {
		border: 0;
		background: none;
		font-family: system-ui, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
	}
`;
