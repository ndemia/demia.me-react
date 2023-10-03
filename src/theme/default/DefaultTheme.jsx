import { ThemeProvider } from 'styled-components';

const defaultTheme = {
	colors: {
		white: 'hsl(0, 0%, 100%)',
		black: 'hsl(0, 0%, 10%)',

		beige01: 'hsl(21, 35%, 92%)',
		beige02: 'hsl(11, 24%, 72%)',
		beige03: 'hsl(309, 6%, 58%)',

		beigeGrey01: 'hsl(60, 2%, 80%)',

		grey01: 'hsl(193, 26%, 35%)',
		grey02: 'hsl(193, 26%, 30%)',
		grey03: 'hsl(193, 26%, 25%)',
		grey04: 'hsl(193, 26%, 15%)',
	},
};

export default function DefaultTheme({ children }) {
	return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}
