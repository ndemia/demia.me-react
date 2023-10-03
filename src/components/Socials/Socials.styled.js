import styled from 'styled-components';

export const StyledSocials = styled.div`
	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.5rem;

		@media (min-width: 25em) {
			gap: 1rem;
		}

		li {
			list-style-type: none;
		}
	}

	a {
		display: inline-flex;
		align-items: center;
		padding: 0.25rem;
		color: ${({ theme }) => theme.colors.beige01};
		transition: all 200ms ease-in-out;

		&:hover {
			color: ${({ theme }) => theme.colors.beige03};

			svg {
				fill: ${({ theme }) => theme.colors.beige03};
			}
		}

		&:focus {
			box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.beige02};
		}

		/* Screen-reader only */
		span {
			clip: rect(0 0 0 0);
			clip-path: inset(50%);
			height: 1px;
			overflow: hidden;
			position: absolute;
			white-space: nowrap;
			width: 1px;
		}

		svg {
			width: 1.5rem;
			height: 1.5rem;
			fill: ${({ theme }) => theme.colors.beige01};
			transition: all 200ms ease-in-out;
			position: relative;
		}
	}
`;
