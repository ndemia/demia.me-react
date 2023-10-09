import styled from 'styled-components';

export const StyledMainSubtitle = styled.h2`
	display: inline-flex;
	font-size: clamp(1rem, 1vw + 1rem, 2.5rem);
	color: ${({ theme }) => theme.colors.beigeGrey01};
	font-weight: 400;
	line-height: 1.1;
	letter-spacing: -0.8px;
	padding-bottom: 1rem;
	margin-bottom: 1rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.beige03};
`;
