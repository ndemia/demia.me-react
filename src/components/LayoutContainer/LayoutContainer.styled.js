import styled from 'styled-components';

export const StyledLayoutContainer = styled.div`
	max-width: 80rem;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(2, auto);
	font-family: 'Work Sans', sans-serif;
	color: ${({ theme }) => theme.colors.beige01};

	@media (min-width: 60em) {
		margin: 0 auto;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(3, auto);
		gap: 2rem;
	}
`;
