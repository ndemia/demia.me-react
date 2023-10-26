import styled from 'styled-components';

export const StyledMainTitle = styled.h1`
	font-size: clamp(2rem, 6vw + 1rem, 3rem);
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	color: ${({ theme }) => theme.colors.beige01};
	letter-spacing: -0.8px;
`;
