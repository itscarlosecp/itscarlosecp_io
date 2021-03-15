import type { InferGetStaticPropsType } from 'next'
import * as React from 'react'
import Container from '@components/Container'
import { getPosts, getFeaturedPosts } from '@lib/api'
import Page, { PageHeader, PageSection } from '@layouts/Page'
import PostItem from '@components/PostItem'

const blog = ({
	posts,
	featuredPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<Container
			title='itscarlosecp - Blog'
			description='Thoughts on the software industry, programming, tech, videography, music, and my personal life.'
		>
			<Page>
				{/* Blog Introduction Container */}
				<PageHeader
					title='Blog'
					description="
					This is a collection of the blog posts I've written over the
					years. These are mostly tutorials or snippets showing how to
					use an specific technology or implement some functionality
					in a specific language, but sometimes I do comments and
					share my opinion about the programming community and tech
					world in general."
				/>

				{/* Featured Posts Container */}
				<PageSection title='Featured Posts'>
					{featuredPosts.map((post) => (
						<PostItem key={post.id} {...post} />
					))}
				</PageSection>

				{/* All Posts Container */}
				<PageSection title='All Posts'>
					{posts.map((post) => (
						<PostItem key={post.id} {...post} />
					))}
				</PageSection>
			</Page>
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
