import type { InferGetStaticPropsType } from 'next'
import * as React from 'react'
import * as Icons from 'react-bootstrap-icons'
import Image from 'next/image'
import Container from '@components/Container'
import { getAccessToken, getTopTracks } from '@lib/spotify'
import TrackItem from '@components/TrackItem'
import { Track } from '@lib/types'

const about = ({
	topTracks,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<Container>
			<div className='flex flex-col justify-center max-w-2xl mx-auto mb-16'>
				<h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
					About Me
				</h1>
				<div className='mb-4 prose leading-6 text-gray-600 dark:text-gray-400'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Autem odit assumenda modi quo architecto dolorem itaque
						harum? Quae nihil magnam aspernatur est sequi eveniet
						magni temporibus, laborum alias consequatur sapiente.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Natus tempore dolores neque, nihil recusandae facilis,
						quaerat fugit quod ullam animi voluptatem voluptatibus
						quos modi nisi dicta enim, nesciunt est quis?
					</p>
				</div>
				<div className='flex gap-4'>
					<a
						href='https://github.com/itscarlosecp'
						className='no-underline'
					>
						<button className='px-4 py-2 rounded bg-black dark:bg-code-bg text-white flex gap-2 items-center'>
							<Icons.Github />
							Visit Github
						</button>
					</a>
				</div>
			</div>
			<div className='flex flex-col justify-center max-w-2xl mx-auto mb-16'>
				<h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
					Top Tracks
				</h1>
				<div className='mb-4 prose leading-6 text-gray-600 dark:text-gray-400'>
					<p>
						I unlock my full "developer potencial" when I am
						listening to the music I like the most, this is
						especially true during long codign sessions. Take a look
						at my most played tracks over the last month.
					</p>
				</div>

				{topTracks.map((track, index) => (
					<TrackItem key={track.id} ranking={index} track={track} />
				))}
			</div>
			<div className='flex flex-col justify-center max-w-2xl mx-auto mb-16'>
				<h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
					Dev Environment + Gear
				</h1>
				<div className='mb-4 prose leading-6 text-gray-600 dark:text-gray-400'>
					<p>
						These are the gadgets and technologies I use on a day to
						day basis, most of the are part of my development
						workflow:
					</p>
					<ul>
						<li>Ubuntu on WSL2 (Windows SubSystem for Linux)</li>
						<li>
							VSCode+
							<a href='https://github.com/VSCodeVim/Vim'>
								Vim Extension
							</a>{' '}
							/ Neovim -{' '}
							<a href='https://github.com/itscarlosecp/.dotfiles'>
								(config files)
							</a>
						</li>
						<li>Dell Inspiron 7000 2-in-1 (Late 2017)</li>
						<li>24" BenQ GW2480 Monitor</li>
						<li>Logitech MX Master 3 Mouse</li>
						<li>Fifine K730 Microphone</li>
					</ul>
				</div>
			</div>
		</Container>
	)
}

export const getStaticProps = async () => {
	const topTracks = await getTopTracks()

	return {
		props: {
			topTracks: topTracks.items as Track[],
		},
	}
}

export default about
