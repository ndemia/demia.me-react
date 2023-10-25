import styled from 'styled-components';

export const StyledRightSection = styled.section`
	margin-bottom: 2rem;
	padding: 0 1rem;

	@media (min-width: 60em) {
		grid-column-start: 2;
		grid-column-end: ${(project) => (project.type === 'project' ? 3 : 2)};
		grid-row-start: ${(project) => (project.type === 'project' ? 2 : 1)};
		grid-row-end: 2;
		padding: ${(project) => (project.type === 'project' ? '4rem 1rem 0 0' : '6.5rem 1rem 0 0')};
		margin-bottom: 0;
	}
`;
