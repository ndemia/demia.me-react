import styled from 'styled-components';

export const StyledLoader = styled.div`
	width: 50%;
	margin: 0 auto;
	border: 1px solid ${({ theme }) => theme.colors.beige01};
	padding: 6px;
	background-image: ${({ theme }) => (theme.name === 'defaultTheme' ? 'initial' : 'url(public/images/pixel.png)')};
	background-repeat: ${({ theme }) => (theme.name === 'defaultTheme' ? 'initial' : 'repeat')};
	background-blend-mode: ${({ theme }) => (theme.name === 'defaultTheme' ? 'initial' : 'luminosity')};
	background-color: ${({ theme }) => (theme.name === 'defaultTheme' ? 'initial' : 'hsl(41, 100%, 50%)')};

	span {
		display: block;
		width: 0.3rem;
		height: 16px;
		background-color: ${({ theme }) => theme.colors.beige01};
		animation-name: loading;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		animation-timing-function: steps(24, jump-none);
	}

	@keyframes loading {
		from {
			width: 0.5rem;
		}
		to {
			width: 100%;
		}
	}
`;
