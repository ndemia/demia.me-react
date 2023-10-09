import styled from 'styled-components';

export const StyledProjectItem = styled.li`
	list-style-type: none;

	a {
		display: block;
		padding-bottom: 1rem;
		text-decoration: none;
		transition: all 200ms ease-in-out;

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

	figure {
		position: relative;
		top: 0;
		left: 0;
		border: 1px solid ${({ theme }) => theme.colors.beige03};
		background-color: ${({ theme }) => theme.colors.beige03};
		transition: all 200ms ease-in-out;

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
	}

	figure img {
		display: block;
		width: 100%;
		filter: grayscale(60%);
		transition: filter 200ms ease-in-out;
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
		border-bottom: 1px solid transparent;
		transition: all 800ms ease-in;

		&::after {
			content: '';
			display: block;
			width: 0;
			height: 1px;
			background-color: ${({ theme }) => theme.colors.beige03};
			opacity: 0;
			transition: all 200ms ease-in;
		}
	}

	svg {
		width: 1.5rem;
		height: 1.5rem;
		fill: ${({ theme }) => theme.colors.beige01};
		margin-left: 0.25rem;
		opacity: 0;
		transform: translateX(-15px);
		transition: all 200ms ease-in-out;
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
			font-weight: 500;
			color: ${({ theme }) => theme.colors.beige01};
			padding: 0.25rem 0.5rem;
			border: 1px solid ${({ theme }) => theme.colors.beige03};
			letter-spacing: 0.5px;
			list-style-type: none;
		}
	}
`;
