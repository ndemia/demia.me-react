import styled from 'styled-components';
import { StyledHeader } from '../Header/Header.styled';

export const StyledProjectHeader = styled(StyledHeader)`
	@media (min-width: 60em) {
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 2;
		grid-row-end: 2;
		padding-top: 0;
	}
`;
