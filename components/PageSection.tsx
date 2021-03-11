import * as React from 'react'

interface Props {
	title?: string
	children: React.ReactNode
}

const PageSection = ({ title, children }: Props) => {
	return (
		<section className='mb-16'>
			{title && (
				<h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white'>
					{title}
				</h3>
			)}
			{children}
		</section>
	)
}

export default PageSection
