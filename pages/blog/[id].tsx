import type { InferGetStaticPropsType, GetStaticPaths } from 'next'
import PostLayout from '@layouts/Post'
import { getPostBySlug, getPosts } from '@lib/db'

const Post = (post: InferGetStaticPropsType<typeof getStaticProps>) => {
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
