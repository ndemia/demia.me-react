import styled from 'styled-components';

export const StyledRightSection = styled.section`
	margin-bottom: 2rem;
	padding: 0 1rem;

	@media (min-width: 60em) {
		grid-column-start: 2;
		grid-column-end: 2;
		grid-row-start: 1;
		grid-row-end: 2;
		padding: 6rem 1rem 0 0;
		margin-bottom: 0;
	}
`;
