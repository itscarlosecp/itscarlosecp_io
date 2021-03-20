import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link rel='manifest' href='/manifest.webmanifest' />
					<link rel='shortcut icon' href='/favicon.ico' />
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
