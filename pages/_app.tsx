import type { AppProps } from 'next/app'
import * as React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'next-themes'
import MDXComponents from '@components/MDXComponents'
import '@styles/index.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider attribute='class'>
			<MDXProvider components={MDXComponents}>
				<Component {...pageProps} />
			</MDXProvider>
		</ThemeProvider>
	)
}

export default MyApp
