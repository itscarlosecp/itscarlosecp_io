import type { Project } from '@lib/types'
import Link from 'next/link'

const ProjectItem = ({ name, ref, description, iconLoc }: Project) => {
	return (
		<Link href={ref}>
			<a className='w-full'>
				<div className='p-4 rounded border flex flex-col gap-2 justify-between'>
					<h4 className='font-medium w-full text-gray-900 dark:text-gray-100'>
						{name}
					</h4>
					<p className='text-gray-600 dark:text-gray-400'>
						{description}
					</p>
				</div>
			</a>
		</Link>
	)
}

export default ProjectItem
