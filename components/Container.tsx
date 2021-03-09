import * as React from 'react'
import * as Icons from 'react-bootstrap-icons'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import Link from 'next/link'

interface Props {
	children: React.ReactNode
	[x: string]: any
}

const Container = ({ children, ...customMeta }: Props) => {
	const [mounted, setMounted] = React.useState(false)
	const { theme, setTheme } = useTheme()

	const router = useRouter()

	React.useEffect(() => setMounted(true), [])

	const meta = {
		title: 'itscarlosecp - developer',
		description: 'Front-end web developer and React enthusiast.',
		image: 'https://itscarlosecp.io/static/images/banner.png',
		type: 'website',
		...customMeta,
	}

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta content={meta.description} name='description' />
				<meta
					property='og:url'
					content={`https://itscarlosecp.io/${router.asPath}`}
				/>
				<link
					rel='canonical'
					href={`https://itscarlosecp.io/${router.asPath}`}
				/>
				<meta property='og:type' content={meta.type} />
				<meta property='og:image' content={meta.image} />
				<meta property='og:site_name' content='itscarlosecp' />
				<meta property='og:description' content={meta.description} />
				<meta property='og:title' content={meta.title} />
			</Head>
			<nav className='sticky top-0 z-10 w-full bg-white dark:bg-black transition-colors blur'>
				<div className='w-full max-w-4xl p-8 mb-8 mx-auto flex justify-between items-center'>
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
					<ul className='flex'>
						<li className='p-1 sm:p-4 flex items-center'>
							<Link href='/'>
								<a className='text-black dark:text-white hover:cursor-pointer transition-colors'>
									Home
								</a>
							</Link>
						</li>
						<li className='p-1 sm:p-4 flex items-center'>
							<Link href='/blog'>
								<a className='text-black dark:text-white hover:cursor-pointer transition-colors'>
									Blog
								</a>
							</Link>
						</li>
						<li className='p-1 sm:p-4 flex items-center'>
							<Link href='/about'>
								<a className='text-black dark:text-white hover:cursor-pointer transition-colors'>
									About
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<main className='flex flex-col justify-center bg-white dark:bg-black transition-colors px-8'>
				{children}
			</main>
		</>
	)
}

export default Container
