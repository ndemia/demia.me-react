import styled from 'styled-components';

export const StyledImage = styled.figure`
	width: fit-content;
	position: relative;
	top: 0;
	left: 0;
	border: 1px solid ${({ theme }) => theme.colors.beige03};

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
		background-image: ${({ theme }) => theme.backgroundImage};
		background-repeat: ${({ theme }) => theme.backgroundRepeat};
		background-blend-mode: ${({ theme }) => theme.backgroundBlendMode};
		background-color: ${({ theme }) => theme.backgroundColor};
	}

	img {
		display: block;
		width: 100%;
		height: auto;
		filter: grayscale(60%);
		transition: ${({ theme }) => theme.transition};
	}
`;
