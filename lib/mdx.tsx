import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import mdxPrism from 'mdx-prism'
import readingTime from 'reading-time'
import renderToString from 'next-mdx-remote/render-to-string'
import MDXComponents from '../components/MDXComponents'

const root = process.cwd()

export const getFiles = async (type: string) => {
	return fs.readdirSync(path.join(root, 'data', type))
}

export const getFileBySlug = async (type: string, slug: string) => {
	const source = slug
		? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
		: fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8')

	const { data, content } = matter(source)
	console.log(data)

	const mdxSource = await renderToString(content, {
		components: MDXComponents,
		mdxOptions: {
			remarkPlugins: [
				require('remark-autolink-headings'),
				require('remark-slug'),
				require('remark-code-titles'),
			],
			rehypePlugins: [mdxPrism],
		},
	})

	return {
		mdxSource,
		frontMatter: {
			wordCount: content.split(/\s+/gu).length,
			readingTime: readingTime(content),
			slug,
			...data,
		},
	}
}

export const getAllFilesFrontMatter = async (type: string) => {
	const files = fs.readdirSync(path.join(root, 'data', type))

	return files.reduce((allPosts, postSlug) => {
		const source = fs.readFileSync(
			path.join(root, 'data', type, postSlug),
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
