import * as React from 'react'

interface PageProps {
	children: React.ReactNode
}

const Page = ({ children }: PageProps) => {
	return (
		<div className='flex flex-col gap-16 justify-center items-start max-w-2xl mx-auto mb-16'>
			{children}
		</div>
	)
}

interface PageHeaderProps {
	title: string
	description: string
	children?: React.ReactNode
}

const PageHeader = ({ title, description, children }: PageHeaderProps) => {
	return (
		<div>
			<h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
				{title}
			</h1>
			<p className='prose text-gray-600 dark:text-gray-400'>
				{description}
			</p>
			{children}
		</div>
	)
}

interface PageSectionProps {
	title: string
	description?: string
	children: React.ReactNode
}

const PageSection = ({ title, description, children }: PageSectionProps) => {
	return (
		<div>
			<h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white'>
				{title}
			</h3>
			{description && (
				<p className='prose mb-4 text-gray-600 dark:text-gray-400'>
					{description}
				</p>
			)}
			{children}
		</div>
	)
}

export { PageHeader, PageSection }
export default Page
