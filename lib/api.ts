import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
	url: process.env.NEXT_PUBLIC_GHOST_CMS_URL,
	key: process.env.GHOST_CMS_CONTENT_API_KEY,
	version: 'v3',
})

export const getPosts = async () => {
	return await api.posts.browse({ limit: 'all', include: 'tags' })
}

export const getFeaturedPosts = async () => {
	return await api.posts.browse({ filter: 'featured:true' })
}

export const getPostBySlug = async (slug: string) => {
	return await api.posts.read({ slug }, { formats: 'html' })
}
