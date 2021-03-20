const TrackItem = ({ ranking, track }) => {
	return (
		<div className='flex flex-row items-baseline max-w-3xl w-full py-4'>
			<p className='text-sm font-bold text-gray-500 dark:text-gray-400'>
				{ranking + 1}
			</p>
			<div className='flex flex-col pl-3'>
				<a
					className='font-medium text-gray-900 dark:text-gray-100 truncate w-60 sm:w-96 md:w-full'
					href={track.external_urls.spotify}
					target='_blank'
					rel='noopener noreferrer'
				>
					{track.name}
				</a>
				<p className='text-gray-500 dark:text-gray-400 truncate w-60 sm:w-96 md:w-full'>
					{track.artists.map((artist, index) => {
						return index === 0 ? artist.name : `, ${artist.name}`
					})}
				</p>
			</div>
		</div>
	)
}

export default TrackItem
