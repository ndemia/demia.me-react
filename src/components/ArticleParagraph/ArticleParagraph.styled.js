import styled from 'styled-components';

export const StyledArticleParagraph = styled.p`
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.beige01};
	margin-bottom: 1rem;

	&:last-of-type {
		margin-bottom: 0;
	}
`;
