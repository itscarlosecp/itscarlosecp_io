import Image from 'next/image'
import { parseISO, format } from 'date-fns'

import Container from '@components/Container'

const editUrl = (slug) =>
	`https://github.com/itscarlosecp/itscarlosecp_io/edit/main/data/blog/${slug}.mdx`

const BlogLayout = ({ frontMatter, children }) => {
	return (
		<Container
			cstmMeta={{
				title: `${frontMatter.title} - itscarlosecp`,
				description: frontMatter.description,
				type: 'article',
			}}
		>
			<article className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full'>
				<h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
					{frontMatter.title}
				</h1>
				<div className='flex justify-between md:justify-start items-center w-full mt-2 mb-8'>
					<div className='flex items-center'>
						<Image
							alt='Carlos Castillo'
							height={24}
							width={24}
							src='/avatar.jpg'
							className='rounded-full'
						/>
					</div>
					<div className='ml-3 w-full flex flex-col sm:flex-row justify-between'>
						<p className='text-sm text-gray-700 dark:text-gray-300'>
							{frontMatter.by}
							{`${frontMatter.author} / `}
							{format(
								parseISO(frontMatter.publishedAt),
								'MMMM dd, yyyy'
							)}
						</p>
						<p className='text-sm text-gray-500 min-w-32'>
							{frontMatter.readingTime.text}
						</p>
					</div>
				</div>
				<div className='prose dark:prose-dark max-w-none w-full'>
					{children}
				</div>
				<div className='text-sm text-gray-700 dark:text-gray-300'>
					<a
						href={editUrl(frontMatter.slug)}
						target='_blank'
						rel='noopener noreferrer'
					>
						{'Edit on GitHub'}
					</a>
				</div>
			</article>
		</Container>
	)
}

export default BlogLayout
