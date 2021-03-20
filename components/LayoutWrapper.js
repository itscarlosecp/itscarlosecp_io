import Navbar from './Navbar'
import Footer from './Footer'

const LayoutWrapper = ({ children }) => {
	return (
		<>
			<Navbar />
			<main id='skip' className='px-8'>
				<div className='max-w-2xl mx-auto mb-16'>{children}</div>
				<Footer />
			</main>
		</>
	)
}

export default LayoutWrapper
