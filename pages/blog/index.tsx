import type { Post } from '../../interfaces'
import { InferGetStaticPropsType } from 'next'
import Posts from '../../components/Posts'

const index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
	console.log(posts)

	return <Posts posts={posts} />
}

export const getStaticProps = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_GHOST_CMS_BACKEND_URL}/ghost/api/v3/content/posts/?key=${process.env.NEXT_PUBLIC_GHOST_CMS_CONTENT_API_KEY}`
	)

	const data = await res.json()

	return {
		props: {
			posts: data.posts as Post[],
		},
	}
}

export default index
