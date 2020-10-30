import styled from 'styled-components';
import { ReturnIcon } from '../../styles/Icons';

export const Container = styled.div``;

interface Props {
	size?: string;
}

export const IconReturn = styled(ReturnIcon)<Props>`
	margin: ${props => props.size};
`;
