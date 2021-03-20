import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link
						rel='preload'
						href='https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/fonts/KaTeX_Main-Regular.woff2'
						as='font'
						type='font/woff2'
						crossOrigin='anonymous'
					/>
					<link
						rel='preload'
						href='https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/fonts/KaTeX_Math-Italic.woff2'
						as='font'
						type='font/woff2'
						crossOrigin='anonymous'
					/>
					<link
						rel='preload'
						href='https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/fonts/KaTeX_Size2-Regular.woff2'
						as='font'
						type='font/woff2'
						crossOrigin='anonymous'
					/>
					<link
						rel='preload'
						href='https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/fonts/KaTeX_Size4-Regular.woff2'
						as='font'
						type='font/woff2'
						crossOrigin='anonymous'
					/>
					<link
						rel='stylesheet'
						href='https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/katex.min.css'
						integrity='sha384-yFRtMMDnQtDRO8rLpMIKrtPCD5jdktao2TV19YiZYWMDkUR5GQZR/NOVTdquEx1j'
						crossOrigin='anonymous'
					/>
					<link rel='manifest' href='/manifest.webmanifest' />
					<link rel='apple-touch-icon' href='/icons/icon-192.png' />
					<link rel='shortcut icon' href='/favicon.ico' />
					<meta name='theme-color' content='#fff' />
				</Head>
				<body className='antialiased bg-white dark:bg-black text-black dark:text-white'>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
