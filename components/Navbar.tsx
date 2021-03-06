import * as React from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import * as Icons from 'react-bootstrap-icons'
import links from '@lib/links'

const Navbar = () => {
	const { theme, setTheme } = useTheme()

	const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

	return (
		<nav className='sticky top-0 z-10 w-full bg-white dark:bg-black blur'>
			<div className='w-full max-w-4xl p-8 mx-auto mb-8 flex justify-between'>
				<button
					className='w-10 h-10 flex justify-center items-center text-black dark:text-white bg-gray-200 dark:bg-gray-800 rounded'
					onClick={toggleTheme}
				>
					{theme === 'light' ? (
						<Icons.MoonFill
							style={{ width: '14px', height: '14px' }}
						/>
					) : (
						<Icons.SunFill />
					)}
				</button>
				<ul className='flex'>
					{links.map((link) => (
						<li
							key={link.path}
							className='p-1 sm:p-4 flex items-center'
						>
							<Link href={link.path}>
								<a className='text-black dark:text-white hover:cursor-pointer transition-colors'>
									{link.name}
								</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
