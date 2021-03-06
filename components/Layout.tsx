import * as React from 'react'
import Navbar from './Navbar'

interface Props {
	children: React.ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<Navbar />
			<main className=''>
				<div className='max-w-3xl mx-auto'>{children}</div>
			</main>
		</>
	)
}

export default Layout
