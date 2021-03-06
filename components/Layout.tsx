import * as React from 'react'
import Navbar from './Navbar'

interface Props {
	children: React.ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<Navbar />
			<main className='bg-light dark:bg-dark'>{children}</main>
		</>
	)
}

export default Layout
