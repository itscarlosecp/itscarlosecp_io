import { Post } from '../interfaces'
import PostItem from './PostItem'

interface Props {
	posts: Post[]
}

const Posts = ({ posts }: Props) => {
	return (
		<ul className='bg-background flex flex-col gap-2'>
			{posts.map((post) => (
				<PostItem key={post.id} post={post} />
			))}
		</ul>
	)
}

export default Posts
