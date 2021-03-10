import type { Post } from '@lib/types'
import * as React from 'react'
import Container from '@components/Container'
import Posts from '@components/Posts'
import { getPosts, getFeaturedPosts } from '@lib/db'
import PageSection from '@components/PageSection'

interface Props {
	posts: Post[]
	featuredPosts: Post[]
}

const blog = ({ posts, featuredPosts }: Props) => {
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
					This is a collection of the blog posts I've written over the
					years. These are mostly tutorials or snippets showing how to
					use an specific technology or implement some functionality
					in a specific language, but sometimes I do comments and
					share my opinion about the programming community and tech
					world in general.
				</p>
				<PageSection sectionTitle='Featured Posts'>
					<Posts posts={featuredPosts} />
				</PageSection>
				<PageSection sectionTitle='All Posts'>
					<Posts posts={posts} />
				</PageSection>
			</div>
		</Container>
	)
}

export const getStaticProps = async () => {
	const posts = await getPosts()
	const featuredPosts = await getFeaturedPosts()

	return {
		props: {
			posts,
			featuredPosts,
		},
	}
}

export default blog
