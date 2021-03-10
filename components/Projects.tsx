import type { Post } from '@lib/types'
import ProjectItem from '@components/ProjectItems'

const Projects = () => (
	<ul className='flex flex-col gap-8'>
		<ProjectItem
			name='Portfolio + Blog'
			description='A minimalist blog and portfolio built with NextJS, GhostCMS and styled with TailwindCSS.'
			ref='https://github.com/itscarlosecp/itscarlosecp_dev'
			iconLoc=''
		/>
	</ul>
)

export default Projects
