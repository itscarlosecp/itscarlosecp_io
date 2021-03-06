import * as React from 'react'
import { useTheme } from 'next-themes'

interface Props {}

const Navbar = ({}: Props) => {
	const { theme, setTheme } = useTheme()

	const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

	return (
		<nav className='sticky top-0 z-10 w-full bg-white blur'>
			<div className='sticky top-0 z-10 w-full max-w-4xl'>
				<button onClick={toggleTheme}>{theme}</button>
			</div>
		</nav>
	)
}

export default Navbar
