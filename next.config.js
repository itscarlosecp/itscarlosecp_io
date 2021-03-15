const withPWA = require('next-pwa')
<<<<<<< HEAD
const runtimeCaching = reuire('next-pwa/cache')
=======
const runtimeCaching = require('next-pwa/cache')
>>>>>>> a118c7f293a8de66376b59690f41ab3407eeb7dc

module.exports = withPWA({
	pwa: {
		dest: 'public',
		runtimeCaching,
	},
	images: {
		domains: [
			's3-us-east-2.amazonaws.com',
			'avatars.githubusercontent.com',
		],
	},
})
