import styled from 'styled-components';

export const StyledSocials = styled.div`
	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.5rem;
		list-style-type: none;

		@media (min-width: 25em) {
			gap: 1rem;
		}
	}

	a {
		display: inline-flex;
		align-items: center;
		padding: 0.25rem;
		color: ${({ theme }) => theme.colors.beige01};
		transition: ${({ theme }) => theme.transition};

		&:hover {
			color: ${({ theme }) => theme.colors.beige03};

			svg {
				fill: ${({ theme }) => theme.colors.beige03};
			}
		}

		&:focus {
			box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.beige02};
		}

		${({ theme }) =>
			theme.name === 'dosTheme'
				? `&:hover,
					&:focus {
						svg {
							transform: translate(2px, -2px);
						}
					}`
				: ''}

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
			width: ${({ theme }) => (theme.name === 'defaultTheme' ? theme.svgSizes.large : theme.svgSizes.small)};
			height: ${({ theme }) => (theme.name === 'defaultTheme' ? theme.svgSizes.large : theme.svgSizes.small)};
			margin-left: ${({ theme }) => (theme.name === 'defaultTheme' ? '0' : '0.25rem')};
			fill: ${({ theme }) => theme.colors.beige01};
			transition: ${({ theme }) => theme.transition};
		}
	}
`;
