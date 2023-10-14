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

	figure {
		position: relative;
		top: 0;
		left: 0;
		border: 1px solid ${({ theme }) => theme.colors.beige03};
		background-color: ${({ theme }) => theme.colors.beige03};
		transition: all 200ms ease-in-out;
		margin: 1.5rem 0;

		&::after {
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			top: 8px;
			left: 8px;
			z-index: -1;
			border: 1px solid ${({ theme }) => theme.colors.beige03};
			transition: all 200ms ease-in-out;
		}

		img {
			display: block;
			width: 100%;
		}
	}

	ul {
		list-style-type: none;
		padding-left: 0.5625rem;
	}
`;
