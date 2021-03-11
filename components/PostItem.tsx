import type { Post } from '@lib/types'
import Link from 'next/link'
import moment from 'moment'

const PostItem = (post: Post) => {
	const publishDate = moment(post.published_at).format('dddd, MMMM Do YYYY')
	const timeSincePublish = moment(post.published_at).fromNow()

	return (
		<Link href={`/blog/${post.id}`}>
			<a className='w-full'>
				<div className='flex flex-col gap-2 justify-between'>
					<h4 className='font-medium text-lg md:text-xl w-full text-gray-900 dark:text-gray-100'>
						{post.meta_title || post.title}
					</h4>
					<p className='text-gray-500'>
						{publishDate} (about {timeSincePublish})
					</p>
					<p className='prose text-gray-600 dark:text-gray-400'>
						{post.custom_excerpt || post.meta_description}
					</p>
				</div>
			</a>
		</Link>
	)
}

export default PostItem
