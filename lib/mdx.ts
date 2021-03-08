import fs from 'fs'
import path from 'path'
// import readingTime from 'reading-time'
// import MDXComponents from '@/components/MDXComponents'

const root = process.cwd()

export const getPosts = async () => {
	const res = await fetch(
		`${process.env.GHOST_CMS_URL}/ghost/api/v3/content/posts/?key=${process.env.GHOST_CMS_CONTENT_API_KEY}`
	)

	const data = await res.json()
	return data.posts
}

export const getFeaturedPosts = async () => {
	const res = await fetch(
		`${process.env.GHOST_CMS_URL}/ghost/api/v3/content/posts/?key=${process.env.GHOST_CMS_CONTENT_API_KEY}&&filter=featured:true`
	)

	const data = await res.json()
	return data.posts
}

export const getPostBySlug = async (collection: string, slug: string) => {}
