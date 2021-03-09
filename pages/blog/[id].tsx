import type { InferGetStaticPropsType, GetStaticPaths } from 'next'
import * as React from 'react'
import PostLayout from '@layouts/Post'
import { getPostBySlug, getPosts } from '@lib/db'
import hljs from 'highlight.js'
import highlight from '@lib/highlight'

const Post = (post: InferGetStaticPropsType<typeof getStaticProps>) => {
	const [mounted, setMounted] = React.useState(false)

	React.useEffect(() => {
		highlight()
		hljs.highlightAll()
		setMounted(true)
	}, [])

	return mounted ? <PostLayout {...post} /> : <div></div>
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
