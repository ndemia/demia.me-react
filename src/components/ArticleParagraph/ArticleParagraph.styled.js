import styled from 'styled-components';

export const StyledArticleParagraph = styled.p`
	font-family: ${({ theme }) => theme.fonts.serif};
	font-size: ${({ theme }) => theme.fontSizes.base};
	color: ${({ theme }) => theme.colors.beigeGrey01};
	margin-bottom: 1.5rem;

	&:last-of-type {
		margin-bottom: 0;
	}
`;
