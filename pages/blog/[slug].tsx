import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import hydrate from 'next-mdx-remote/hydrate'
import { getFiles, getFileBySlug } from '../../lib/mdx'
import BlogTemplate from '@layouts/BlogTemplate'
import MDXComponents from '@components/MDXComponents'

const BlogPost = ({ mdxSource, frontMatter }) => {
	const content = hydrate(mdxSource, {
		components: MDXComponents,
	})

	return <BlogTemplate frontMatter={frontMatter}>{content}</BlogTemplate>
}

export const getStaticPaths: GetStaticPaths = async () => {
	const files = await getFiles('blog')
	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.mdx', ''),
		},
	}))

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async ({ params }) => {
	const post = await getFileBySlug('blog', params.slug)

	return { props: post }
}

export default BlogPost
