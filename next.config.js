const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
	pwa: {
		dest: 'public',
		disable: true,
		register: true,
		skipWaiting: true,
		runtimeCaching,
	},
	images: {
		domains: [
			's3-us-east-2.amazonaws.com',
			'avatars.githubusercontent.com',
		],
	},
})
