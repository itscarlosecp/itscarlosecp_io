import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head />
				<body className='bg-white dark:bg-black transition-colors'>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
