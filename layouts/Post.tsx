import type { PostOrPage } from '@tryghost/content-api'
import Container from '@components/Container'
import Image from 'next/image'
import { parseISO, format } from 'date-fns'

const PostLayout = (post: PostOrPage) => {
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
				<div className='flex items-center w-full mt-2 mb-8'>
					<Image
						alt='itscarloescp'
						height={24}
						width={24}
						src='https://avatars.githubusercontent.com/u/47466248?v=4'
						className='rounded-full'
					/>
					<div className='w-full flex flex-col sm:flex-row justify-between sm:items-center ml-2'>
						<p className='text-sm text-gray-800 dark:text-gray-300'>
							{'Carlos Castillo / '}
							{format(
								parseISO(post.published_at),
								'MMMM dd, yyyy'
							)}
						</p>
						<p className='text-sm text-gray-500 min-w-32'>
							{post.reading_time} min read
						</p>
					</div>
				</div>
				<div className='mb-8'>
					<figure>
						<Image
							src={post.feature_image}
							width={1920}
							height={1080}
							alt={post.meta_title || post.title}
							priority
						/>
						<figcaption className='text-gray-500 text-sm mt-3.5 text-center'>
							{post.meta_title || post.title}
						</figcaption>
					</figure>
				</div>
				<div
					className='prose lg:prose-lg dark:prose-dark max-w-none w-full'
					dangerouslySetInnerHTML={{
						__html: post.html
							.replace(
								/href="http/g,
								'target="_blank" nofollow" rel="noopener noreferrer" href="http'
							)
							.replace(
								/img/g,
								'img loading="lazy" decoding="async"'
							),
					}}
				/>
			</article>
		</Container>
	)
}

export default PostLayout
