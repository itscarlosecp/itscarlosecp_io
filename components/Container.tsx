import * as React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import * as Icons from 'react-bootstrap-icons'
import NextLink from 'next/link'

interface Props {
	cstmMeta?: {
		[x: string]: string
	}
	children: React.ReactNode
}

const Container = ({ cstmMeta, children }: Props) => {
	const router = useRouter()
	const { theme, setTheme } = useTheme()

	const meta = {
		title: 'Carlos Castillo - Software Developer',
		description: 'Web Developer and Machine Learning Enthusiast',
		type: 'website',
		...cstmMeta,
	}

	return (
		<div className='bg-white dark:bg-black'>
			<Head>
				<title>{meta.title}</title>
				<meta name='robots' content='follow, index' />
				<meta name='description' content={meta.description} />
				<meta
					property='og:url'
					content={`https://itscarlosecp.io${router.asPath}`}
				/>
				<meta property='og:type' content={meta.type} />
				<meta property='og:site_name' content='itscarlosecp' />
				<meta property='og:description' content={meta.description} />
				<meta property='og:title' content={meta.title} />
			</Head>

			<nav className='sticky top-0 z-10 w-full bg-white dark:bg-black blur'>
				<div className='w-full max-w-4xl p-8 mx-auto mb-8 flex justify-between'>
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
							<NextLink href='/'>
								<a className='text-black dark:text-white hover:cursor-pointer transition-colors'>
									Home
								</a>
							</NextLink>
						</li>
						<li className='p-1 sm:p-4 flex items-center'>
							<NextLink href='/blog'>
								<a className='text-black dark:text-white hover:cursor-pointer transition-colors'>
									Blog
								</a>
							</NextLink>
						</li>
					</ul>
				</div>
			</nav>
			<main className='flex flex-col justify-center px-8'>
				<div className='w-full max-w-2xl mx-auto'>{children}</div>
			</main>
		</div>
	)
}

export default Container
