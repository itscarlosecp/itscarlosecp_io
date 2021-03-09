import type { AppProps } from 'next/app'
import * as React from 'react'
import { ThemeProvider } from 'next-themes'
import '@styles/index.css'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import css from 'highlight.js/lib/languages/css'
import python from 'highlight.js/lib/languages/python'

const App = ({ Component, pageProps }: AppProps) => {
	React.useEffect(() => {
		hljs.registerLanguage('javascript', javascript)
		hljs.registerLanguage('typescript', typescript)
		hljs.registerLanguage('css', css)
		hljs.registerLanguage('python', python)
		hljs.highlightAll()
	}, [])

	return (
		<ThemeProvider attribute='class'>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default App
