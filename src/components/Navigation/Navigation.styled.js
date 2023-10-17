import styled from 'styled-components';

export const StyledNavigation = styled.nav`
	padding: 3rem 1rem 0 1rem;

	@media (min-width: 60em) {
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 1;
		grid-row-end: 1;
		padding-top: 6rem;
	}

	a {
		width: min-content;
		color: ${({ theme }) => theme.colors.beige01};
		display: inline-flex;
		align-items: center;
		transition: ${({ theme }) => theme.transition};

		&:hover {
			color: ${({ theme }) => theme.colors.beige03};

			svg {
				fill: ${({ theme }) => theme.colors.beige03};
				transform: translateX(-2px);
			}
		}

		&:focus {
			box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.beige02};
		}

		svg {
			width: 1rem;
			height: 1rem;
			margin-right: 0.25rem;
			fill: ${({ theme }) => theme.colors.beige01};
			transition: ${({ theme }) => theme.transition};
		}
	}
`;
