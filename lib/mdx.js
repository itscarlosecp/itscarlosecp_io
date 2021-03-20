import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'
import renderToString from 'next-mdx-remote/render-to-string'

import MDXComponents from '@/components/MDXComponents'

const ROOT = process.cwd()

export const getFiles = async (type) =>
	fs.readdirSync(path.join(ROOT, 'data', type))

export const getFileBySlug = async (type, slug) => {
	const source = slug
		? fs.readFileSync(path.join(ROOT, 'data', type, `${slug}.mdx`), 'utf8')
		: fs.readFileSync(path.join(ROOT, 'data', `${type}.mdx`), 'utf8')

	const { data, content } = matter(source)
	const mdxSource = await renderToString(content, {
		components: MDXComponents,
		mdxOptions: {
			remarkPlugins: [
				require('remark-slug'),
				require('remark-autolink-headings'),
				require('remark-code-titles'),
				require('remark-math'),
			],
			inlineNotes: true,
			rehypePlugins: [
				require('rehype-katex'),
				require('@mapbox/rehype-prism'),
			],
		},
	})

	return {
		mdxSource,
		frontMatter: {
			wordCount: content.split(/\s+/gu).length,
			readingTime: readingTime(content),
			slug: slug || null,
			...data,
		},
	}
}

export const getAllFilesFrontMatter = async (type) => {
	const files = fs.readdirSync(path.join(ROOT, 'data', type))

	return files.reduce((allPosts, postSlug) => {
		const source = fs.readFileSync(
			path.join(ROOT, 'data', type, postSlug),
			'utf8'
		)
		const { data } = matter(source)

		return [
			{
				...data,
				slug: postSlug.replace('.mdx', ''),
			},
			...allPosts,
		]
	}, [])
}
