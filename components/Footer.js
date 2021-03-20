import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'

const ExternalLink = ({ href, children }) => (
	<a
		className='text-gray-500 dark:text-gray-400 hover:text-gray-600 '
		target='_blank'
		rel='noopener noreferrer'
		href={href}
	>
		{children}
	</a>
)

const Footer = () => (
	<footer className='max-w-2xl mx-auto w-full mb-8'>
		<hr className='w-full border-1 border-gray-200 dark:border-gray-800 mb-8' />
		<div className='w-full max-w-2xl grid grid-cols-1 gap-4 pb-0 sm:pb-16 sm:grid-cols-3'>
			<div className='flex flex-col gap-4'>
				<Link href='/'>
					<a className='text-gray-500 dark:text-gray-400 hover:text-gray-600 '>
						Home
					</a>
				</Link>
				<Link href='/about'>
					<a className='text-gray-500 dark:text-gray-400 hover:text-gray-600 '>
						About
					</a>
				</Link>
			</div>
			<div className='flex flex-col gap-4'>
				<ExternalLink href={siteMetadata.twitter}>Twitter</ExternalLink>
				<ExternalLink href={siteMetadata.github}>GitHub</ExternalLink>
			</div>
			<div className='flex flex-col gap-4'>
				<Link href='/notes'>
					<a className='text-gray-500 dark:text-gray-400 hover:text-gray-600 '>
						Notes
					</a>
				</Link>
				<ExternalLink href={`${siteMetadata.github}/tutorials`}>
					Tutorials
				</ExternalLink>
			</div>
		</div>
	</footer>
)

export default Footer
