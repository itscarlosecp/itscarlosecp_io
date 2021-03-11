import * as withPWA from 'next-pwa'

module.exports = withPWA({
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true,
	},
	images: {
		domains: ['https://s3-us-east-2.amazonaws.com/'],
	},
})
