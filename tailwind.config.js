const colors = require('tailwindcss/colors')
const { spacing, fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./layouts/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'code-bg': '#1C1C1C',
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
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans],
			},
			container: {
				center: true,
				padding: '1rem',
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: colors.gray['700'],
						a: {
							color: colors.blue['600'],
							'&:hover': {
								color: colors.blue['700'],
							},
							code: { color: colors.blue['400'] },
						},
						'h2,h3,h4': {
							'scroll-margin-top': spacing[32],
						},
						figcaption: { color: colors.gray['400'] },
						'blockquote p:first-of-type::before': false,
						'blockquote p:last-of-type::after': false,
					},
				},
				dark: {
					css: {
						color: colors.gray['300'],
						a: {
							color: colors.blue['400'],
							'&:hover': {
								color: colors.blue['600'],
							},
							code: { color: colors.blue['400'] },
						},
						blockquote: {
							borderLeftColor: colors.gray['700'],
							color: colors.gray['300'],
						},
						'h2,h3,h4': {
							color: colors.gray['100'],
							'scroll-margin-top': spacing[32],
						},
						hr: { borderColor: colors.gray['700'] },
						ol: {
							li: {
								'&:before': { color: colors.gray['500'] },
							},
						},
						ul: {
							li: {
								'&:before': {
									backgroundColor: colors.gray['500'],
								},
							},
						},
						strong: { color: colors.gray['300'] },
						thead: {
							color: colors.gray['100'],
						},
						tbody: {
							tr: {
								borderBottomColor: colors.gray['700'],
							},
						},
					},
				},
			}),
		},
	},
	variants: {
		typography: ['dark'],
	},
	plugins: [
		require('tailwindcss-dark-mode'),
		require('@tailwindcss/typography'),
	],
}
