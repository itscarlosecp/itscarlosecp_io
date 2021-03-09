import type { InferGetStaticPropsType, GetStaticPaths } from 'next'
import * as React from 'react'
import hljs from 'highlight.js'
import highlight from '@lib/highlight'
import PostLayout from '@layouts/Post'
import { getPostBySlug, getPosts } from '@lib/db'

const Post = (post: InferGetStaticPropsType<typeof getStaticProps>) => {
	React.useEffect(() => {
		highlight()
		hljs.initHighlighting()
	}, [])

	return <PostLayout {...post} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getPosts()

	return {
		paths: posts.map((postData) => ({
			params: {
				id: postData.id,
			},
		})),
		fallback: false,
	}
}

export const getStaticProps = async ({ params }) => {
	const post = await getPostBySlug(params.id)

	return {
		props: post,
	}
}

export default Post
