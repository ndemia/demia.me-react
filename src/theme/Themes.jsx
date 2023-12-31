export const defaultTheme = {
	name: 'defaultTheme',
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
	fonts: {
		sans: "'Work Sans', 'Inter', 'Open Sans', 'sans-serif'",
		serif: "'Bitter', 'Georgia', 'serif'",
	},
	fontSizes: {
		smaller: '0.8rem',
		small: '0.9rem',
		base: '1rem',
	},
	fontWeights: {
		regular: '400',
		medium: '500',
		bold: '700',
	},
	lineHeight: {
		base: '1.5',
	},
	letterSpacing: {
		none: 'normal',
		base: 'normal',
		wide: '0.025em',
	},
	backgroundImage: 'initial',
	backgroundRepeat: 'no-repeat',
	backgroundBlendMode: 'normal',
	backgroundColor: 'unset',
	background: 'linear-gradient(to bottom right, hsl(260, 6%, 35%) 0%, hsl(260, 6%, 15%) 100%)',
	transition: 'all 200ms ease-in-out',
	svgSizes: {
		small: '0.9rem',
		regular: '1rem',
		large: '1.5rem',
	},
};

export const dosTheme = {
	name: 'dosTheme',
	colors: {
		white: 'hsl(0, 0%, 100%)',
		black: 'hsl(0, 0%, 10%)',
		beige01: 'hsl(41, 100%, 50%)',
		beige02: 'hsl(41, 100%, 50%)',
		beige03: 'hsl(41, 100%, 40%)',
		beigeGrey01: 'hsl(41, 100%, 50%)',
		amberBg: 'hsl(3, 31%, 10%)',
	},
	fonts: {
		mono: "'437', 'monospace'",
	},
	fontSizes: {
		small: '1rem',
		base: '1.1rem',
	},
	fontWeights: {
		regular: '400',
		medium: '400',
		bold: '400',
	},
	lineHeight: {
		base: '1.3',
	},
	letterSpacing: {
		none: '0',
		base: '-0.5px',
	},
	backgroundImage: 'url(/images/pixel.png)',
	backgroundRepeat: 'repeat',
	backgroundBlendMode: 'luminosity',
	backgroundColor: 'hsl(41, 100%, 50%)',
	background: 'hsl(3, 31%, 10%)',
	transition: 'unset',
	svgSizes: {
		small: '0.8rem',
		regular: '1rem',
		large: '1.5rem',
	},
};
