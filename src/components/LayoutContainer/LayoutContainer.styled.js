import styled from 'styled-components';

export const StyledLayoutContainer = styled.div`
	max-width: 80rem;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(2, auto);

	@media (min-width: 60em) {
		margin: 0 auto;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(3, auto);
		gap: 2rem;
	}
`;
