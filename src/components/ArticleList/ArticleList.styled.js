import styled from 'styled-components';

export const StyledArticleList = styled.ul`
	font-family: ${({ theme }) => theme.fonts.serif};
	color: ${({ theme }) => theme.colors.beigeGrey01};
	list-style-type: square;
	list-style-position: inside;
	margin-bottom: 1.5rem;

	li:not(:last-child) {
		padding-bottom: 0.25rem;
	}
`;
