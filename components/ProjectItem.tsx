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
			<div className='grid grid-cols-10 gap-2 border border-gray-200 dark:border-gray-800 rounded p-4'>
				<div className='w-full h-full flex justify-center items-center dark:text-white'>
					{project.iconId === 'next-js' && (
						<Icons.Pen className='h-8 w-8 fill-current' />
					)}
					{project.iconId === 'vscode' && (
						<Icons.Cpu className='h-8 w-8 fill-current' />
					)}
				</div>
				<div className='col-span-8'>
					<h4 className='text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100'>
						{project.name}
					</h4>
					<p className='leading-5 text-gray-700 dark:text-gray-300'>
						{project.description}
					</p>
				</div>
			</div>
		</a>
	)
}

export default ProjectItem
