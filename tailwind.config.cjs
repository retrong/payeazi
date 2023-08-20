/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html.ejs', './src/**/*.{js,ts,jsx,tsx}'],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				primary: '#62B790',
				secondary: '#0D1835',
				dimWhite: '',
				dimBlue: '',
			},
			fontFamily: {
				cabin: ['Cabin Condensed', 'sans-serif'],
			},
		},
		screens: {
			xs: '480px',
			ss: '620px',
			sm: '768px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px',
		},
	},
	plugins: [],
};
