export const Section = ({ title, description, margin = 'mb-8', children }) => {
	return (
		<div className={`flex flex-col ${margin}`}>
			<h2 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white'>
				{title}
			</h2>
			{description && <Paragraph content={description} />}
			{children}
		</div>
	)
}

export const Paragraph = ({ content }) => (
	<p className='leading-relaxed text-gray-600 dark:text-gray-400'>
		{content}
	</p>
)
