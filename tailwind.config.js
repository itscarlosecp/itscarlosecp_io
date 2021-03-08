const colors = require('tailwindcss/colors')
const { spacing, fontFamily } = require('tailwindcss/defaultTheme')

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
				gray: colors.blueGray,
				indigo: colors.indigo,
				red: colors.rose,
				yellow: colors.amber,
				blue: colors.blue,
				green: colors.green,
				cyan: colors.cyan,
			},
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans],
			},
			container: {
				center: true,
				padding: '1rem',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
