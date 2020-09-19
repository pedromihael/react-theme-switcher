import styled from 'styled-components';
import { lighten } from 'polished';

export const CardContainer = styled.div`
	height: 60vh;
	width: 90vw;
	background: ${props => props.theme.title === 'light' ? lighten(0.05, props.theme.colors.background) : props.theme.colors.primary};
	color: #fff;
	box-shadow: ${props => props.theme.title === 'light' ? '-1px 2px 3px 1px rgba(156,156,156,1)' : 'none'};
	display: flex;
	margin: 2%;
	border-radius: 10px;
`;