import type { Project } from '@lib/types'

const ProjectItem = (project: Project) => {
	return (
		<a href={project.refUrl} className='w-full'>
			<div className='p-4 rounded border flex flex-col gap-2 justify-between'>
				<h4 className='font-medium w-full text-gray-900 dark:text-gray-100'>
					{project.name}
				</h4>
				<p className='text-gray-600 dark:text-gray-400'>
					{project.description}
				</p>
			</div>
		</a>
	)
}

export default ProjectItem
