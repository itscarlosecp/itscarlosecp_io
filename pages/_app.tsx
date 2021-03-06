import * as React from 'react'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/index.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider attribute='class'>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	)
}

export default MyApp
