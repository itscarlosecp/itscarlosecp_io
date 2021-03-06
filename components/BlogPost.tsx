import Link from 'next/link'
import format from 'comma-number'

interface Props {
	title: string
	description: string
	slug: string
}

const BlogPost = ({ title, description, slug }) => {
	return <Link href={`/blog/${slug}`}>{title}</Link>
}

export default BlogPost
