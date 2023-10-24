import styled from 'styled-components';

export const StyledFooter = styled.footer`
	@media (min-width: 60em) {
		grid-column-start: 1;
		grid-column-end: 3;
		grid-row-start: 3;
		grid-row-end: 3;
	}

	& > div {
		padding: 1rem;
		border-top: 1px solid ${({ theme }) => theme.colors.beige03};
	}

	article {
		font-size: 1rem;
		color: ${({ theme }) => theme.colors.beige01};
		margin-bottom: 0.5rem;

		&:first-child > p > span:first-child {
			font-style: italic;
		}

		&:nth-child(2) {
			margin-bottom: 2.5rem;
		}

		p:first-of-type {
			letter-spacing: ${({ theme }) => theme.letterSpacing.none};
			color: ${({ theme }) => theme.colors.beige02};
		}
	}
`;
