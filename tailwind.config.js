const colors = require('tailwindcss/colors')
const { spacing, fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'code-bg': '#161616',
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
						color: theme('colors.gray.700'),
						a: {
							color: theme('colors.blue.500'),
							'&:hover': {
								color: theme('colors.blue.700'),
							},
							code: { color: theme('colors.blue.400') },
						},
						'h2,h3,h4': {
							'scroll-margin-top': spacing[32],
						},
						figcaption: { color: theme('color.gray.400') },
						'blockquote p:first-of-type::before': false,
						'blockquote p:last-of-type::after': false,
					},
				},
				dark: {
					css: {
						color: theme('colors.gray.300'),
						a: {
							color: theme('colors.blue.400'),
							'&:hover': {
								color: theme('colors.blue.600'),
							},
							code: { color: theme('colors.blue.400') },
						},
						blockquote: {
							borderLeftColor: theme('colors.gray.700'),
							color: theme('colors.gray.300'),
						},
						'h2,h3,h4': {
							color: theme('colors.gray.100'),
							'scroll-margin-top': spacing[32],
						},
						hr: { borderColor: theme('colors.gray.700') },
						ol: {
							li: {
								'&:before': { color: theme('colors.gray.500') },
							},
						},
						ul: {
							li: {
								'&:before': {
									backgroundColor: theme('colors.gray.500'),
								},
							},
						},
						strong: { color: theme('colors.gray.300') },
						thead: {
							color: theme('colors.gray.100'),
						},
						tbody: {
							tr: {
								borderBottomColor: theme('colors.gray.700'),
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
