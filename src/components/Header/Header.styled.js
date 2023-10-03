import styled from 'styled-components';

export const StyledHeader = styled.header`
	padding: 2rem 1rem 0 1rem;
	margin-bottom: 2rem;

	@media (min-width: 60em) {
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 1;
		grid-row-end: 2;
		padding-top: 6rem;
		margin-bottom: 0;
	}
`;
