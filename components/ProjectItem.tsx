import type { Project } from '@lib/types'
import * as Icons from 'react-bootstrap-icons'

const ProjectItem = (project: Project) => {
	return (
		<a
			className='hover:shadow'
			href={project.href}
			aria-label={project.name}
			target='_blank'
			rel='noopener noreferrer'
		>
			<div className='flex flex-col gap-2 border border-gray-200 dark:border-gray-800 rounded p-4'>
				<h4 className='text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100'>
					{project.name}
				</h4>
				<p className='leading-5 text-gray-700 dark:text-gray-300'>
					{project.description}
				</p>
			</div>
		</a>
	)
}

export default ProjectItem
