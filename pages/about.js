import React from 'react'
import { getTopTracks } from '@/lib/spotify'
import { Section, Paragraph } from '@/components/Page'
import { PageSeo } from '@/components/SEO'
import TrackItem from '@/components/TrackItem'

const About = ({ topTracks }) => {
	return (
		<>
			<PageSeo
				title='itscarlosecp - About'
				description='Carlos Castillo, software developer. Get to know me a little bit better.'
			/>
			<div className='flex flex-col mb-16'>
				<h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
					About Me
				</h1>
				<Paragraph
					content={`I would describe myself as a creative person, someone who is
				passionate about development, mostly web user interfaces. I'm
				also interested in math, science and sharing my knowledge with
				others.`}
				/>
				<div className='my-2 prose text-gray-600 dark:text-gray-400'>
					<ul>
						<li>🚧 Working on my personal blog.</li>
						<li>
							💾 Talk to me about tech, that's what I love, tech.
						</li>
					</ul>
				</div>
				<div className='flex gap-4'>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://github.com/itscarlosecp'
						className='no-underline'
					>
						<button className='px-4 py-2 rounded bg-[#1C1C1C] text-white flex gap-2 items-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='18'
								height='18'
								viewBox='0 0 24 24'
								fill='currentColor'
							>
								<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
							</svg>
							Visit Github
						</button>
					</a>
				</div>
			</div>
			<Section
				title='Top Tracks'
				description={`I unlock my full "developer potencial" when I am listening to
				the music I like the most, this is especially true during long
				codign sessions. Take a look at my most played tracks over the
				last month.`}
				margin='mb-16'
			>
				<ul className='mt-2 w-full flex flex-col divide-y divide-gray-100 dark:divide-gray-800'>
					{topTracks.map((track, index) => (
						<TrackItem
							key={track.id}
							ranking={index}
							track={track}
						/>
					))}
				</ul>
			</Section>
			<Section
				title='Dev Environment'
				description={`These are the gadgets and technologies I use on a day to day
				basis, most of the are part of my development workflow:`}
				margin='mb-16'
			>
				<div className='prose dark:prose-dark text-gray-600 dark:text-gray-400'>
					<ul>
						<li>Ubuntu on WSL2 (Windows SubSystem for Linux)</li>
						<li>
							VSCode / Neovim -{' '}
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://github.com/itscarlosecp/.dotfiles'
							>
								config files
							</a>
						</li>
						<li>Dell Inspiron 15 7000 2-in-1 (Late 2017)</li>
						<li>24" BenQ GW2480 Monitor</li>
						<li>Logitech MX Master 3 Mouse</li>
						<li>Fifine K730 Microphone</li>
					</ul>
				</div>
			</Section>
		</>
	)
}

export const getStaticProps = async () => {
	const topTracks = await getTopTracks()

	return {
		props: {
			topTracks,
		},
	}
}

export default About
