import type { Post } from '../interfaces'
import Image from 'next/image'

interface Props {
	post: Post
}

const PostItem = ({ post }: Props) => {
	return (
		<article className='card flex gap-2'>
			<figure className='w-32 h-32'>
				<Image
					src={post.feature_image}
					alt={post.title}
					layout='responsive'
					width='400'
					height='400'
				/>
			</figure>
		</article>
	)
}

export default PostItem
