import styled from 'styled-components';

export const StyledNotFound404 = styled.div`
	width: 100%;
	height: calc(100vh - 4rem);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: ${({ theme }) => theme.fonts.sans};
	color: ${({ theme }) => theme.colors.beige01};
	text-align: center;

	@media (min-width: 60em) {
		grid-column-start: 1;
		grid-column-end: 3;
		grid-row-start: 1;
		grid-row-end: 4;
	}

	h2 {
		margin-bottom: 1rem;
	}
`;
