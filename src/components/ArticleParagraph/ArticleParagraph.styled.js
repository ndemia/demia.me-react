import styled from 'styled-components';

export const StyledArticleParagraph = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.base};
	color: ${({ theme }) => theme.colors.beige01};
	margin-bottom: 1.25rem;

	&:last-of-type {
		margin-bottom: 0;
	}
`;
