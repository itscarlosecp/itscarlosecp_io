import * as React from 'react'
import Navbar from './Navbar'

interface Props {
	children: React.ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<Navbar />
			<main className='flex flex-col justify-center px-8'>
				<div className='w-full max-w-2xl mx-auto'>{children}</div>
			</main>
		</>
	)
}

export default Layout
