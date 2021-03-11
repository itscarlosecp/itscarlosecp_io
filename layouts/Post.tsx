import type { Post } from '@lib/types'
import Image from 'next/image'
import { parseISO, format } from 'date-fns'
import Container from '@components/Container'

const PostLayout = (post: Post) => {
	return (
		<Container
			title={`${post.meta_title || post.title} – itscarlosecp`}
			description={post.meta_description || post.custom_excerpt}
			image={post.feature_image}
			date={new Date(post.published_at).toISOString()}
			type='article'
		>
			<article className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full'>
				<h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white transition-colors'>
					{post.title}
				</h1>
				<div className='flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8'>
					<div className='flex items-center'>
						<Image
							alt='itscarloescp'
							height={24}
							width={24}
							src='https://avatars.githubusercontent.com/u/47466248?v=4'
							className='rounded-full'
						/>
						<p className='text-sm text-gray-800 dark:text-gray-300 ml-2'>
							{'Carlos Castillo / '}
							{format(
								parseISO(post.published_at),
								'MMMM dd, yyyy'
							)}
						</p>
					</div>
					<p className='text-sm text-gray-500 min-w-32 mt-2 md:mt-0'>
						{post.reading_time} min read
					</p>
				</div>
				<div
					className='prose lg:prose-lg dark:prose-dark max-w-none w-full'
					dangerouslySetInnerHTML={{
						__html: post.html.replace(
							/href="http/g,
							'target="_blank" rel="external nofollow" href="http'
						),
					}}
				/>
			</article>
		</Container>
	)
}

export default PostLayout
