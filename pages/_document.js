import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link rel='manifest' href='/manifest.webmanifest' />
					<link rel='shortcut icon' href='/favicon.ico' />
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/favicons/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/favicons/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/favicons/favicon-16x16.png'
					/>
					<link
						rel='mask-icon'
						href='/favicons/safari-pinned-tab.svg'
						color='#1c1c1c'
					/>
					<meta name='msapplication-TileColor' content='#ffffff' />
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
