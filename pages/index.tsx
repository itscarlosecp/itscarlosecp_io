import type { Post } from '@lib/types'
import Link from 'next/link'
import Container from '@components/Container'
import BlogPost from '@components/BlogPost'
import { getFeaturedPosts } from '@lib/mdx'

interface Props {
	featuredPosts: Post[]
}

const index = ({ featuredPosts }: Props) => {
	return (
		<Container>
			<div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
				<h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
					Hi, I'm Carlos Castillo
				</h1>
				<h2 className='prose text-gray-600 dark:text-gray-400 mb-16'>
					I’m a developer, writer, and creator. I work at ▲Vercel as a
					Solutions Architect. You’ve found my personal slice of the
					internet –&nbsp;
					<Link href='/guestbook'>
						<a>sign my guestbook&nbsp;</a>
					</Link>
					while you're here.
				</h2>
				<h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white'>
					Featured Posts
				</h3>
				<ul>
					{featuredPosts.map((post) => (
						<BlogPost
							key={post.slug}
							title={post.title}
							slug={post.slug}
						/>
					))}
				</ul>
			</div>
		</Container>
	)
}

export const getStaticProps = async () => {
	const featuredPosts = await getFeaturedPosts()

	return {
		props: {
			featuredPosts,
		},
	}
}

export default index
