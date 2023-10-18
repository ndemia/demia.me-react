import styled from 'styled-components';

export const StyledImage = styled.figure`
	position: relative;
	top: 0;
	left: 0;
	border: 1px solid ${({ theme }) => theme.colors.beige03};
	transition: ${({ theme }) => theme.transition};

	&::after {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 8px;
		left: 8px;
		z-index: -1;
		border: 1px solid ${({ theme }) => theme.colors.beige03};
		transition: ${({ theme }) => theme.transition};
	}

	img {
		display: block;
		width: 100%;
		filter: grayscale(60%);
		transition: filter ${({ theme }) => theme.transition};
	}
`;
