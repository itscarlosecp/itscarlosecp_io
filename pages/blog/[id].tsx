import type { InferGetStaticPropsType, GetStaticPaths } from 'next'
import * as React from 'react'
import PostLayout from '@layouts/Post'
import { getPostBySlug, getPosts } from '@lib/db'
import Prism from 'prismjs'
import 'prismjs/components/prism-python'

const Post = (post: InferGetStaticPropsType<typeof getStaticProps>) => {
	React.useEffect(() => {
		Prism.highlightAll()
	}, [])

	return <PostLayout {...post} />
}

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
