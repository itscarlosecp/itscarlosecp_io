import type { Post, Project } from '@lib/types'
import Container from '@components/Container'
import { getFeaturedPosts } from '@lib/db'
import { getProjects } from '@lib/projects'
import PageSection from '@components/PageSection'
import Posts from '@components/Posts'
import ProjectItem from '@components/ProjectItem'

interface Props {
	featuredPosts: Post[]
	projects: Project[]
}

const index = ({ featuredPosts, projects }: Props) => {
	return (
		<Container>
			<div className='flex flex-col justify-center items-start max-w-2xl mx-auto'>
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
				<PageSection title='Projects'>
					<ul className='flex flex-col gap-4'>
						{projects.map((project) => (
							<ProjectItem key={project.iconId} {...project} />
						))}
					</ul>
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
