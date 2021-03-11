import type { AppProps } from 'next/app'
import * as React from 'react'
import { analytics } from '@lib/firebase'
import Navbar from '@components/Navbar'
import { ThemeProvider } from 'next-themes'
import Navbar from '@components/Navbar'
import '@styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
	React.useEffect(() => {
		analytics()
	}, [])

	return (
		<ThemeProvider attribute='class'>
			<Navbar>
				<Component {...pageProps} />
			</Navbar>
		</ThemeProvider>
	)
}

export default App
