import * as React from 'react'

interface Props {
	title?: string
	children: React.ReactNode
}

const PageSection = ({ title, children }: Props) => {
	return (
		<div className=''>
			{title && (
				<h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white'>
					{title}
				</h3>
			)}
			{children}
		</div>
	)
}

export default PageSection
