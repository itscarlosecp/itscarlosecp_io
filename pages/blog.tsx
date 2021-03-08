import type { Post } from '@lib/types'
import * as React from 'react'
import Container from '@components/Container'
import BlogPost from '@components/BlogPost'
import { getPosts } from '@lib/mdx'

interface Props {
	posts: Post[]
}

const blog = ({ posts }: Props) => {
	return (
		<Container
			title='itscarlosecp - Blog'
			description='Thoughts on the software industry, programming, tech, videography, music, and my personal life.'
		>
			<div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
				<h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
					Blog
				</h1>
				<p className='text-gray-600 dark:text-gray-400 mb-4'>
					{`I've been writing online since 2014, mostly about web development and tech careers.
            In total, I've written ${posts.length} articles on this site.
            Use the search below to filter by title.`}
				</p>

				<h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white'>
					All Posts
				</h3>
				{posts.map((post) => (
					<BlogPost key={post.id} {...post} />
				))}
			</div>
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
