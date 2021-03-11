import type { Post, Project } from '@lib/types'
import Container from '@components/Container'
import Posts from '@components/Posts'
import { getFeaturedPosts } from '@lib/db'
import PageSection from '@components/PageSection'
import Projects from '@components/Projects'
import { getProjects } from '@lib/projects'

interface Props {
	featuredPosts: Post[]
	projects: Project[]
}

const index = ({ featuredPosts, projects }: Props) => {
	console.log(projects)

	return (
		<Container>
			<div className='flex flex-col gap-12 justify-center items-start max-w-2xl mx-auto mb-16'>
				<PageSection>
					<h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
						Hi, I'm Carlos
					</h1>
					<p className='prose text-gray-600 dark:text-gray-400'>
						<b className='underline'>Frontend developer</b> who
						focuses on writing clean, elegant and efficient code. I
						specialize in TailwindCSS and Next.js. I'm also a{' '}
						computer engineering{' '}
						<b className='underline'>student</b> at Universy of
						Buenos Aires, Argetina.
					</p>
				</PageSection>
				<PageSection title='Featured Posts'>
					<Posts posts={featuredPosts} />
				</PageSection>
				<PageSection title='Featured Posts'>
					<Projects />
				</PageSection>
			</div>
		</Container>
	)
}

export const getStaticProps = async () => {
	const featuredPosts = await getFeaturedPosts()
	const projects = await getProjects()

	return {
		props: {
			featuredPosts,
			projects,
		},
	}
}

export default index
