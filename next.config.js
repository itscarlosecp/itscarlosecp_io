const withPWA = require('next-pwa')
const runtimeChacing = require('next-pwa/cache')

module.exports = withPWA({
	pwa: {
		dest: 'public',
		runtimaChaching,
	},
	images: {
		domains: [
			's3-us-east-2.amazonaws.com',
			'avatars.githubusercontent.com',
		],
	},
})
