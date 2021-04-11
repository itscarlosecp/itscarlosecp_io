import React from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'

const Navbar = () => {
	const [mounted, setMounted] = React.useState(false)
	const { theme, setTheme } = useTheme()

	React.useEffect(() => setMounted(true), [])

	return (
		<>
			<header className='w-full bg-gradient-to-r from-blue-700 to-blue-400 '>
				<p className='w-full max-w-4xl p-4 sm:px-8 mx-auto text-center font-medium text-white'>
					Welcome to my website! 🎉 — First realease is now live on{' '}
					<a
						href={siteMetadata.siteRepo}
						target='_blank'
						rel='noopener noreferrer'
						className='text-[#92DFF3] hover:text-[#69d2ee] transition-colors underline'
					>
						GitHub
					</a>
				</p>
			</header>

			<nav className='sticky top-0 z-10 w-full bg-white dark:bg-black blur bg-opacity-60'>
				<div className='w-full max-w-4xl p-4 sm:p-8 mb-8 mx-auto flex justify-between items-center'>
					<button
						type='button'
						className='w-10 h-10 flex justify-center items-center text-black dark:text-white bg-gray-200 dark:bg-[#1C1C1C] rounded'
						aria-label='Toggle Dark Theme'
						onClick={() =>
							setTheme(theme === 'dark' ? 'light' : 'dark')
						}
					>
						{mounted &&
							(theme === 'light' ? (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'
									fill='currentColor'
									className='w-[18px] h-[18px]'
								>
									<path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
								</svg>
							) : (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'
									fill='currentColor'
									className='w-[20px] h-[20px]'
								>
									<path
										fillRule='evenodd'
										d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
										clipRule='evenodd'
									/>
								</svg>
							))}
					</button>
					<ul className='flex font-medium'>
						<li className='p-2 sm:p-4 flex items-center'>
							<Link href='/'>
								<a className='text-black dark:text-white hover:cursor-pointer '>
									Home
								</a>
							</Link>
						</li>
						<li className='p-2 sm:p-4 flex items-center'>
							<Link href='/blog'>
								<a className='text-black dark:text-white hover:cursor-pointer '>
									Blog
								</a>
							</Link>
						</li>
						<li className='p-2 sm:p-4 flex items-center'>
							<Link href='/about'>
								<a className='text-black dark:text-white hover:cursor-pointer '>
									About
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar
