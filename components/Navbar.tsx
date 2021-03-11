import * as React from 'react'
import * as Icons from 'react-bootstrap-icons'
import { useTheme } from 'next-themes'
import Link from 'next/link'

interface Props {
	children: React.ReactNode
}

const Navbar = ({ children }: Props) => {
	const [mounted, setMounted] = React.useState(false)
	const { theme, setTheme } = useTheme()

	React.useEffect(() => setMounted(true), [])

	return (
		<>
			<nav className='sticky top-0 z-10 w-full bg-white dark:bg-black transition-colors blur'>
				<div className='w-full max-w-4xl p-4 sm:p-8 mb-8 mx-auto flex justify-between items-center'>
					<button
						type='button'
						className='w-12 h-12 flex justify-center items-center text-black dark:text-white bg-gray-200 dark:bg-code-bg rounded'
						aria-label='Toggle Dark Theme'
						onClick={() =>
							setTheme(theme === 'dark' ? 'light' : 'dark')
						}
					>
						{mounted && (
							<>
								{theme === 'light' ? (
									<Icons.MoonFill
										style={{
											width: '14px',
											height: '14px',
										}}
									/>
								) : (
									<Icons.SunFill />
								)}
							</>
						)}
					</button>
					<ul className='flex font-medium'>
						<li className='p-2 sm:p-4 flex items-center'>
							<Link href='/'>
								<a className='text-black dark:text-white hover:cursor-pointer transition-colors'>
									Home
								</a>
							</Link>
						</li>
						<li className='p-2 sm:p-4 flex items-center'>
							<Link href='/blog'>
								<a className='text-black dark:text-white hover:cursor-pointer transition-colors'>
									Blog
								</a>
							</Link>
						</li>
						<li className='p-2 sm:p-4 flex items-center'>
							<Link href='/about'>
								<a className='text-black dark:text-white hover:cursor-pointer transition-colors'>
									About
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			{children}
		</>
	)
}

export default Navbar
