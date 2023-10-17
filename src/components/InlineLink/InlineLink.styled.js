import styled from 'styled-components';

export const StyledInlineLink = styled.a`
	width: max-content;
	display: inline-flex;
	align-items: center;
	color: ${({ theme }) => theme.colors.beige01};
	transition: ${({ theme }) => theme.transition};

	&:hover {
		color: ${({ theme }) => theme.colors.beige03};

		svg {
			fill: ${({ theme }) => theme.colors.beige03};
		}
	}

	&:focus {
		box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.beige02};
	}

	&:hover,
	&:focus {
		svg {
			transform: translate(2px, -2px);
		}
	}

	svg {
		width: 0.9rem;
		height: 0.9rem;
		margin-left: 0.25rem;
		fill: ${({ theme }) => theme.colors.beige02};
		transition: ${({ theme }) => theme.transition};
	}
`;
