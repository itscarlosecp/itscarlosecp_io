import type { InferGetStaticPropsType } from 'next'
import type { Track } from '@lib/types'
import * as React from 'react'
import * as Icons from 'react-bootstrap-icons'
import Container from '@components/Container'
import { getTopTracks } from '@lib/spotify'
import Page, { PageHeader, PageSection } from '@layouts/Page'
import TrackItem from '@components/TrackItem'

const about = ({
	topTracks,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<Container>
			<Page>
				{/* About Introduction */}
				<PageHeader
					title='About Me'
					description="This is a collection of the blog posts I've written over
						the years. These are mostly tutorials or snippets
						showing how to use an specific technology or implement
						some functionality in a specific language, but sometimes
						I do comments and share my opinion about the programming
						community and tech world in general."
				>
					<div className='mt-4 flex gap-4'>
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
				</PageHeader>

				{/* Top Tracks */}
				<PageSection
					title='Top Tracks'
					description='I unlock my full "developer potencial" when I am
						listening to the music I like the most, this is
						especially true during long codign sessions. Take a look
						at my most played tracks over the last month.'
				>
					<ul className='flex flex-col divide-y divide-gray-100 dark:divide-gray-800'>
						{topTracks.map((track, index) => (
							<TrackItem
								key={track.id}
								ranking={index}
								track={track}
							/>
						))}
					</ul>
				</PageSection>

				{/* Dev Environment Container */}
				<PageSection
					title='Dev Environment'
					description='These are the gadgets and technologies I use on a day to
						day basis, most of the are part of my development
						workflow:'
				>
					<div className='prose dark:prose-dark'>
						<ul>
							<li>
								Ubuntu on WSL2 (Windows SubSystem for Linux)
							</li>
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
				</PageSection>
			</Page>
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
