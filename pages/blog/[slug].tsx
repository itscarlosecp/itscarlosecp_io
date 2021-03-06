import hydrate from 'next-mdx-remote/hydrate'
import { GetStaticPaths } from 'next'
import { getFiles, getFileBySlug } from '@lib/mdx'
import BlogLayout from '@layouts/Blog'
import MDXComponents from '@components/MDXComponents'

const BlogPost = ({ mdxSource, frontMatter }) => {
	const content = hydrate(mdxSource, {
		components: MDXComponents,
	})

	return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>
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
