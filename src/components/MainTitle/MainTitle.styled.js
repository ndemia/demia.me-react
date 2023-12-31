import styled from 'styled-components';

export const StyledMainTitle = styled.h1`
	font-family: ${({ theme }) => theme.fonts.sans};
	font-size: clamp(2rem, 6vw + 1rem, 3rem);
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	color: ${({ theme }) => theme.colors.beige01};
	letter-spacing: -0.8px;
	line-height: 1;
`;
