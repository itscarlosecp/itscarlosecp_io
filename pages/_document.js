import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
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
