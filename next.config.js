const withPWA = require('next-pwa')

module.exports = withPWA({
	pwa: {
		dest: 'public',
	},
	images: {
		domains: [
			's3-us-east-2.amazonaws.com',
			'avatars.githubusercontent.com',
		],
	},
})
