import styled from 'styled-components';

export const StyledLoader = styled.div`
	width: 50%;
	margin: 0 auto;
	border: 1px solid ${({ theme }) => theme.colors.beige01};
	padding: 6px;

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
