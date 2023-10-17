import styled from 'styled-components';

export const StyledSwitch = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	background: none;
	border: 0;
	display: inline-flex;
	cursor: pointer;
	padding: 0.25rem;
	transition: all 200ms ease-in-out;
	font-family: '437', monospace;
	font-size: 1rem;
	color: hsl(41, 100%, 50%);

	&:hover {
		color: hsl(41, 100%, 40%);
	}

	&:focus {
		box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.beige02};
	}

	span {
		opacity: 1;
		animation-name: standby;
		animation-duration: 1s;
		animation-iteration-count: infinite;
		animation-timing-function: steps(2, jump-none);
	}

	@keyframes standby {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;
