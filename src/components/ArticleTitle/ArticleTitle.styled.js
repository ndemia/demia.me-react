import styled from 'styled-components';

export const StyledArticleTitle = styled.h3`
	width: fit-content;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.beige01};
	text-transform: uppercase;
	letter-spacing: 1px;
	margin-bottom: 0.3rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.beige03};
`;
