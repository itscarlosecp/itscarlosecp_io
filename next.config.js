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
	webpack: (config, { dev, isServer }) => {
		// if (isServer) {
		// 	require('./scripts/generate-sitemap')
		// 	require('./scripts/generate-rss')
		// }

		if (!dev && !isServer) {
			Object.assign(config.resolve.alias, {
				react: 'preact/compat',
				'react-dom/test-utils': 'preact/test-utils',
				'react-dom': 'preact/compat',
			})
		}

		return config
	},
})
