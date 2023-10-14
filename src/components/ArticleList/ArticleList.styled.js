import styled from 'styled-components';

export const StyledArticleList = styled.ul`
	color: ${({ theme }) => theme.colors.beige01};
	list-style-type: square;
	list-style-position: inside;
	margin-bottom: 1rem;

	li:not(:last-child) {
		padding-bottom: 0.25rem;
	}
`;
