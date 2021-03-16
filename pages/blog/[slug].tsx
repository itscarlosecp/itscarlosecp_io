import type { InferGetStaticPropsType, GetStaticPaths } from 'next'
import * as React from 'react'
import PostLayout from '@layouts/Post'
import { getPostBySlug, getPosts } from '@lib/api'
import Prism from 'prismjs'
import '@lib/prism'

const Post = (post: InferGetStaticPropsType<typeof getStaticProps>) => {
	const html = post.html
		.replace(
			/href="http/g,
			'target="_blank" nofollow" rel="noopener noreferrer" href="http'
		)
		.replace(/img/g, 'img loading="lazy"')

	React.useEffect(() => {
		Prism.highlightAll()
	}, [])

	return <PostLayout {...{ ...post, html }} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getPosts()

	return {
		paths: posts.map((postData) => ({
			params: {
				slug: postData.slug,
			},
		})),
		fallback: false,
	}
}

export const getStaticProps = async ({ params }) => {
	const post = await getPostBySlug(params.slug)

	return {
		props: post,
	}
}

export default Post
