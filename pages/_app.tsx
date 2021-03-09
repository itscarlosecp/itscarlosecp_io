import type { AppProps } from 'next/app'
import * as React from 'react'
import { ThemeProvider } from 'next-themes'
import hljs from 'highlight.js'
import highlight from '@lib/highlight'
import '@styles/index.css'

const App = ({ Component, pageProps }: AppProps) => {
	React.useEffect(() => {
		highlight()
		hljs.initHighlighting()
	}, [])

	return (
		<ThemeProvider attribute='class'>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default App
