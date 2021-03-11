import type { AppProps } from 'next/app'
import * as React from 'react'
import { ThemeProvider } from 'next-themes'
import Navbar from '@components/Navbar'
import '@styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider attribute='class'>
			<Navbar>
				<Component {...pageProps} />
			</Navbar>
		</ThemeProvider>
	)
}

export default App
