import { Post } from './types'

export const getPosts = async () => {
	const res = await fetch(
		`${process.env.GHOST_CMS_URL}/ghost/api/v3/content/posts/?key=${process.env.GHOST_CMS_CONTENT_API_KEY}`
	)

	const data = await res.json()
	return data.posts as Post[]
}

export const getFeaturedPosts = async () => {
	const res = await fetch(
		`${process.env.GHOST_CMS_URL}/ghost/api/v3/content/posts/?key=${process.env.GHOST_CMS_CONTENT_API_KEY}&filter=featured:true`
	)

	const data = await res.json()
	return data.posts as Post[]
}

export const getPostBySlug = async (slug: string) => {
	const res = await fetch(
		`${process.env.GHOST_CMS_URL}/ghost/api/v3/content/posts/${slug}/?key=${process.env.GHOST_CMS_CONTENT_API_KEY}`
	)

	const data = await res.json()
	return data.posts[0] as Post
}
