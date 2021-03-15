import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link rel='manifest' href='/manifest.json' />
					<link rel='apple-touch-icon' href='/icon-192.png' />
					<link rel='shortcut icon' href='/favicon.ico' />
					<meta name='theme-color' content='#fff' />
				</Head>
				<body className='bg-white dark:bg-black transition-colors'>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
