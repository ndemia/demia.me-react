import styled from 'styled-components';

export const StyledProjectList = styled.ul`
	list-style-type: none;

	@media (min-width: 40em) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, min-content);
		gap: 2rem;
		padding: 1rem 0 0 0;
	}
`;
