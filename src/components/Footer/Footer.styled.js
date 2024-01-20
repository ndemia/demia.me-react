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
		font-family: ${({ theme }) => theme.fonts.sans};
		font-size: ${({ theme }) => theme.fontSizes.smaller};
		color: ${({ theme }) => theme.colors.beige01};
		margin-bottom: 0.5rem;

		&:not(:last-child) {
			font-family: ${({ theme }) => theme.fonts.serif};
			letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
		}

		&:nth-child(2) {
			margin-bottom: 2.5rem;
		}

		p:first-of-type:not(:last-child) {
			letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
			color: ${({ theme }) => theme.colors.beige02};
		}
	}
`;
