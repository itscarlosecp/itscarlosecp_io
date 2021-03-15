import type { InferGetStaticPropsType } from 'next'
import * as React from 'react'
import Container from '@components/Container'
import { getPosts } from '@lib/api'
import Page, { PageHeader, PageSection } from '@layouts/Page'
import PostItem from '@components/PostItem'

const blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const [searchValue, setSearchValue] = React.useState('')
	const filteredPosts = posts
		.sort(
			(a, b) =>
				Number(new Date(b.published_at)) -
				Number(new Date(a.published_at))
		)
		.filter(
			(post) =>
				post.title
					.toLocaleLowerCase()
					.includes(searchValue.toLocaleLowerCase()) ||
				post.tags
					.map((tag) => tag.name)
					.includes(searchValue.toLocaleLowerCase())
		)

	return (
		<Container
			title='itscarlosecp - Blog'
			description='Thoughts on the software industry, programming and tech.'
		>
			<Page>
				{/* Blog Introduction Container */}
				<PageHeader
					title='Blog'
					description="
					This is a collection of the blog posts I've written. These are mostly tutorials or snippets showing how to
					use an specific technology or implement some functionality
					in a specific language, but sometimes I do comments and
					share my opinion about the programming community and tech
					world in general."
				>
					<div className='mt-4 relative w-full'>
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
				</PageHeader>

				{/* All Posts Container */}
				<PageSection title='All Posts'>
					{filteredPosts.map((post) => (
						<PostItem key={post.id} {...post} />
					))}
				</PageSection>
			</Page>
		</Container>
	)
}

export const getStaticProps = async () => {
	const posts = await getPosts()

	return {
		props: {
			posts,
		},
	}
}

export default blog
