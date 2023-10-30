import styled from 'styled-components';

export const StyledArticleTitle = styled.h3`
	width: fit-content;
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	color: ${({ theme }) => theme.colors.beige01};
	text-transform: uppercase;
	line-height: 1.2;
	padding-bottom: 0.3rem;
	letter-spacing: 1px;
	margin-bottom: 0.3rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.beige03};
`;
