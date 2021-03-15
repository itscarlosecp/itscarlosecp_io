import * as React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

interface Props {
	children: React.ReactNode
	[x: string]: any
}

const Container = ({ children, ...customMeta }: Props) => {
	const router = useRouter()

	const meta = {
		title: 'itscarlosecp - developer',
		description: 'Front-end web developer and React enthusiast.',
		image: 'https://itscarlosecp.dev/static/images/banner.png',
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
					content={`https://itscarlosecp-dev.vercel.app${router.asPath}`}
				/>
				<link
					rel='canonical'
					href={`https://itscarlosecp-dev.vercel.app${router.asPath}`}
				/>
				<meta property='og:title' content={meta.title} />
				<meta property='og:description' content={meta.description} />
				<meta property='og:image' content={meta.image} />
				<meta property='og:site_name' content='itscarlosecp' />
				<meta property='og:type' content={meta.type} />
				<meta name='twitter:creator' content='@itscarlosecp' />
			</Head>
			<main className='bg-white dark:bg-black transition-colors px-8'>
				{children}
			</main>
		</>
	)
}

export default Container
