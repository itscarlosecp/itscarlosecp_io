import React from 'react'
import { PageSeo } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import PostItem from '@/components/PostItem'
import siteMetadata from '@/data/siteMetadata'

const Blog = ({ allPostsFrontMatter }) => {
	const [searchValue, setSearchValue] = React.useState('')
	const filteredPosts = allPostsFrontMatter
		.sort(
			(a, b) =>
				Number(new Date(b.publishedAt)) -
				Number(new Date(a.publishedAt))
		)
		.filter(
			(post) =>
				post.title
					.toLocaleLowerCase()
					.includes(searchValue.toLocaleLowerCase()) ||
				post.tags.some((tag) =>
					tag.includes(searchValue.toLocaleLowerCase())
				)
		)

	return (
		<>
			<PageSeo
				title={`Blog - ${siteMetadata.title}`}
				description='Thoughts on the software industry, programming and tech.'
			/>
			<h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
				Blog
			</h1>
			<p className='prose text-gray-600 dark:text-gray-400'>
				This is a collection of the blog posts I've written. These are
				mostly tutorials or snippets showing how to use an specific
				technology or implement some functionality in a specific
				language. Sometimes I and share my opinion about the programming
				community and tech world in general.
			</p>
			<div className='mt-4 relative w-full mb-16'>
				<input
					aria-label='Search articles'
					type='text'
					onChange={(e) => setSearchValue(e.target.value)}
					placeholder='Search posts'
					className='px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'
				/>
				<svg
					className='absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
					/>
				</svg>
			</div>
			{filteredPosts.map((frontMatter) => (
				<PostItem key={frontMatter.slug} {...frontMatter} />
			))}
		</>
	)
}

export const getStaticProps = async () => {
	const allPostsFrontMatter = await getAllFilesFrontMatter('blog')

	return {
		props: { allPostsFrontMatter },
	}
}

export default Blog
