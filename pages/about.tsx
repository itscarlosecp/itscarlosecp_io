import * as Icons from 'react-bootstrap-icons'
import Container from '@components/Container'

const about = () => {
	return (
		<Container>
			<div className='flex flex-col justify-center items-stretch max-w-2xl mx-auto mb-16'>
				<h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
					About Me
				</h1>
				<div className='mb-8 prose leading-6 text-gray-600 dark:text-gray-400'>
					<p>
						Hey, I’m Lee. I'm a developer, writer, and the creator
						of&nbsp;
					</p>
					<p>
						I’ve spoken across the country at conferences and
						meet-ups about front-end development, design, and
						recruiting. I write about development, tech careers, and
						my personal life on&nbsp;
					</p>
					<p>
						I grew up in small-town Iowa and went to school at Iowa
						State, graduating with a degree in Computer Engineering.
						I spend my free time playing music, creating videos, and
						enjoying time with friends and family in Des Moines, IA.
					</p>
				</div>
				<a
					href='https://github.com/itscarlosecp'
					className='no-underline'
				>
					<button className='px-4 py-2 rounded bg-black text-white flex gap-2 items-center'>
						<Icons.Github />
						Open Github
					</button>
				</a>
			</div>
		</Container>
	)
}

export const getStaticProps = async () => {
	const res = await fetch('https://api.github.com/users/itscarlosecp')
	const githubProfile = await res.json()

	return {
		props: {
			githubProfile,
		},
	}
}

export default about
