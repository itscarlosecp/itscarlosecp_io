const colors = require('tailwindcss/colors')

module.exports = {
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				black: colors.black,
				white: colors.white,
				gray: colors.gray,
				indigo: colors.indigo,
				red: colors.rose,
				yellow: colors.amber,
				blue: colors.blue,
				green: colors.green,
				cyan: colors.cyan,
			},
			container: {
				center: true,
				padding: '1rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
