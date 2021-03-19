import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import { analytics } from '@/lib/firebase'
import Head from 'next/head'

import { SEO } from '@/components/SEO'
import LayoutWrapper from '@/components/LayoutWrapper'
import MDXComponents from '@/components/MDXComponents'

import '@/styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
	React.useEffect(() => {
		if (process.env.NODE_ENV === 'production') {
			analytics()
		}
	}, [])

	return (
		<ThemeProvider attribute='class'>
			<MDXProvider components={MDXComponents}>
				<Head>
					<meta
						content='width=device-width, initial-scale=1'
						name='viewport'
					/>
				</Head>
				<DefaultSeo {...SEO} />
				<LayoutWrapper>
					<Component {...pageProps} />
				</LayoutWrapper>
			</MDXProvider>
		</ThemeProvider>
	)
}

export default MyApp
