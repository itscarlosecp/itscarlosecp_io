import Navbar from './Navbar'
import Footer from './Footer'

const LayoutWrapper = ({ children }) => {
	return (
		<>
			<Navbar />
			<main
				id='skip'
				className='flex flex-col justify-center bg-white dark:bg-black px-8'
			>
				<div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
					{children}
				</div>
				<Footer />
			</main>
		</>
	)
}

export default LayoutWrapper
