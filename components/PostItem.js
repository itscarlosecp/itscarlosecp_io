import Link from 'next/link'

const PostItem = (frontMatter) => {
	return (
		<Link href={`/blog/${frontMatter.slug}`}>
			<a className='w-full'>
				<div className='mb-8 w-full'>
					<div className='flex flex-col md:flex-row justify-between'>
						<h3 className='text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100'>
							{frontMatter.title}
						</h3>
					</div>
					<p className='leading-6 text-gray-600 dark:text-gray-400'>
						{frontMatter.summary}
					</p>
				</div>
			</a>
		</Link>
	)
}

export default PostItem
