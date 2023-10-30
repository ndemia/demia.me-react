import styled from 'styled-components';
import { StyledHeader } from '../Header/Header.styled';

export const StyledProjectHeader = styled(StyledHeader)`
	@media (min-width: 60em) {
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 2;
		grid-row-end: 2;
		padding-top: 0;
		position: sticky;
		top: calc(2rem + 7.625rem);
		height: fit-content;
	}

	figure {
		margin-top: 1.5rem;
	}

	img {
		filter: grayscale(0);
	}

	ul {
		list-style-type: none;
		padding: 1.5rem 0 0 0.5625rem;
	}
`;
