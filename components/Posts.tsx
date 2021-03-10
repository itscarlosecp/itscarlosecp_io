import type { Post } from '@lib/types'
import PostItem from '@components/PostItem'

interface Props {
	posts: Post[]
}

const Posts = ({ posts }: Props) => (
	<ul className='flex flex-col gap-8'>
		{posts.map((post) => (
			<PostItem key={post.id} {...post} />
		))}
	</ul>
)

export default Posts
