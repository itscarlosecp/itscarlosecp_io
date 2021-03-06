import { InferGetStaticPropsType, GetStaticPaths } from 'next'
import fs from 'fs'
import path from 'path'

const root = process.cwd()

const Post = ({ slug }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return <div>{slug}</div>
}

export const getStaticPaths: GetStaticPaths = async () => {
	const files = fs.readdirSync(path.join(root, 'data', 'blog'))

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.md', ''),
		},
	}))

	console.log(paths)

	return {
		paths,
		fallback: true,
	}
}

export const getStaticProps = async ({ params: { slug } }) => {
	return {
		props: {
			slug,
		},
	}
}

export default Post
