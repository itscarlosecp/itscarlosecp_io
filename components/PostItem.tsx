import type { Post } from '@lib/types'
import Link from 'next/link'
import moment from 'moment'

const PostItem = (post: Post) => {
	const publishDate = moment(post.published_at).format('dddd, MMMM Do YYYY')
	const timeSincePublish = moment(post.published_at).fromNow()

	return (
		<Link href={`/blog/${post.id}`}>
			<a className='w-full'>
				<div className='mb-8 w-full'>
					<div className='flex flex-col md:flex-row justify-between'>
						<h4 className='font-medium text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100'>
							{post.meta_title || post.title}
						</h4>
					</div>
					<p className='prose text-gray-600 dark:text-gray-400'>
						{post.custom_excerpt || post.meta_description}
					</p>
				</div>
			</a>
		</Link>
	)
}

export default PostItem
