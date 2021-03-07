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
	const { theme, setTheme } = useTheme()

	const router = useRouter()

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
				<meta name='robots' content='follow, index' />
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
				<meta property='og:site_name' content='itscarlosecp' />
				<meta property='og:description' content={meta.description} />
				<meta property='og:title' content={meta.title} />
				<meta property='og:image' content={meta.image} />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@itscarlosecp' />
				<meta name='twitter:title' content={meta.title} />
				<meta name='twitter:description' content={meta.description} />
				<meta name='twitter:image' content={meta.image} />
			</Head>
			<nav className='sticky top-0 z-10 w-full bg-white dark:bg-black transition-colors blur'>
				<div className='w-full max-w-4xl p-8 mb-8 mx-auto flex justify-between items-center'>
					<button
						type='button'
						className='w-10 h-10 flex justify-center items-center text-black dark:text-white bg-gray-200 dark:bg-gray-800 rounded'
						aria-label='Toggle Dark Theme'
						onClick={() =>
							setTheme(theme === 'dark' ? 'light' : 'dark')
						}
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