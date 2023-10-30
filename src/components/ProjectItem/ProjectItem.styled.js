import styled from 'styled-components';

export const StyledProjectItem = styled.li`
	padding-bottom: 1rem;

	@media (min-width: 40em) {
		padding-bottom: 0;
	}

	a {
		display: block;
		padding-bottom: 1rem;
		text-decoration: none;
		transition: ${({ theme }) => theme.transition};

		&:hover,
		&:focus {
			h4::after {
				width: 100%;
				opacity: 1;
			}

			svg {
				transform: translateX(0);
				opacity: 1;
			}

			figure img {
				filter: grayscale(20%);
			}

			div::after {
				background-color: ${({ theme }) => theme.colors.grey04};
			}
		}

		&:focus {
			box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.beige02};
		}

		&:active {
			figure {
				top: 8px;
				left: 8px;
			}

			figure::after {
				top: 0;
				left: 0;
			}
		}
	}

	div {
		display: flex;
		flex-direction: column;
	}

	section {
		padding: 1rem 1rem 0 0.5625rem;
		color: ${({ theme }) => theme.colors.beige01};
	}

	header {
		display: inline-flex;
		align-items: center;
		margin-bottom: 0.25rem;
	}

	h4 {
		font-size: 1.2rem;
		font-weight: ${({ theme }) => theme.fontWeights.bold};
		border-bottom: 1px solid transparent;
		transition: all 800ms ease-in;

		&::after {
			content: '';
			display: block;
			width: 0;
			height: 1px;
			background-color: ${({ theme }) => theme.colors.beige03};
			opacity: 0;
			transition: ${({ theme }) => (theme.name === 'defaultTheme' ? 'all 200ms ease-in' : theme.transition)};
		}
	}

	svg {
		width: 1.5rem;
		height: 1.5rem;
		fill: ${({ theme }) => theme.colors.beige01};
		margin-left: 0.25rem;
		opacity: 0;
		transform: translateX(-15px);
		transition: ${({ theme }) => theme.transition};
	}

	p {
		color: ${({ theme }) => theme.colors.beige01};
		margin-bottom: 1.2rem;
	}

	ul {
		display: inline-flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.5rem;

		li {
			font-size: 0.8rem;
			font-weight: 400;
			color: ${({ theme }) => theme.colors.beige01};
			padding: 0.25rem 0.5rem;
			border: 1px solid ${({ theme }) => theme.colors.beige03};
			letter-spacing: 0.5px;
			list-style-type: none;
		}
	}
`;
