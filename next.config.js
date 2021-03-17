const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
	images: {
		pwa: {
			dest: 'public',
			runtimeCaching,
		},
		domains: [
			's3-us-east-2.amazonaws.com',
			'avatars.githubusercontent.com',
		],
	},
})
