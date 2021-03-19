import Image from 'next/image'
import { BlogSeo } from '@/components/SEO'
import { parseISO, format } from 'date-fns'
import siteMetadata from '@/data/siteMetadata'

const PostLayout = ({ frontMatter, children }) => {
	return (
		<>
			<BlogSeo
				url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`}
				{...frontMatter}
			/>
			<article className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full'>
				<h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white transition-colors'>
					{frontMatter.title}
				</h1>
				<div className='flex items-center w-full mt-2 mb-6'>
					<Image
						alt='itscarloescp'
						height={24}
						width={24}
						src='https://avatars.githubusercontent.com/u/47466248?v=4'
						className='rounded-full'
						priority
					/>
					<div className='w-full flex flex-col sm:flex-row justify-between sm:items-center ml-2'>
						<p className='text-sm text-gray-800 dark:text-gray-300'>
							{'Carlos Castillo / '}
							{format(
								parseISO(frontMatter.publishedAt),
								'MMMM dd, yyyy'
							)}
						</p>
						<p className='text-sm text-gray-500 min-w-32'>
							{frontMatter.readingTime.text}
						</p>
					</div>
				</div>
				<div className='prose dark:prose-dark max-w-none w-full'>
					{children}
				</div>
			</article>
		</>
	)
}

export default PostLayout
