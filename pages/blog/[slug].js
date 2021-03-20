import hydrate from 'next-mdx-remote/hydrate'
import { getFiles, getFileBySlug } from '@/lib/mdx'
import BlogPostLayout from '@/layouts/BlogPost'
import MDXComponents from '@/components/MDXComponents'

const Blog = ({ mdxSource, frontMatter }) => {
	const content = hydrate(mdxSource, { components: MDXComponents })

	return <BlogPostLayout frontMatter={frontMatter}>{content}</BlogPostLayout>
}

export const getStaticPaths = async () => {
	const allPosts = await getFiles('blog')

	return {
		paths: allPosts.map((p) => ({
			params: {
				slug: p.replace(/\.mdx/, ''),
			},
		})),
		fallback: false,
	}
}

export const getStaticProps = async ({ params }) => {
	const post = await getFileBySlug('blog', params.slug)

	return { props: post }
}

export default Blog
