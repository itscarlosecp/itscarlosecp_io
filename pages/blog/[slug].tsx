import type { InferGetStaticPropsType, GetStaticPaths } from 'next'
import * as React from 'react'
import PostLayout from '@layouts/Post'
import { getPostBySlug, getPosts } from '@lib/api'
import Prism from 'prismjs'
import '@lib/prism'

const Post = (post: InferGetStaticPropsType<typeof getStaticProps>) => {
	React.useEffect(() => {
		Prism.highlightAll()
	}, [])

	return <PostLayout {...post} />
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
