import type { Track } from '@lib/types'

interface Props {
	ranking: number
	track: Track
}

const TrackItem = ({ ranking, track }: Props) => {
	return (
		<li className='flex flex-row items-baseline max-w-3xl w-full py-4'>
			<p className='text-sm font-bold text-gray-400 dark:text-gray-600'>
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
				<p className='text-gray-500 truncate w-60 sm:w-96 md:w-full'>
					{track.artists.map((artist, index) => {
						return index === 0 ? artist.name : `, ${artist.name}`
					})}
				</p>
			</div>
		</li>
	)
}

export default TrackItem
