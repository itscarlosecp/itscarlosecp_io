import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='es'>
				<Head />
				<body className='bg-white dark:bg-gray-900 transition-colors'>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
