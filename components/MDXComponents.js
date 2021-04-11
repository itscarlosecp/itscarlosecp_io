import Image from 'next/image'
import Link from 'next/link'

const CustomLink = (props) => {
	const href = props.href
	const isInternalLink =
		href && (href.startsWith('/') || href.startsWith('#'))

	if (isInternalLink) {
		return (
			<Link href={href}>
				<a {...props} />
			</Link>
		)
	}

	return <a target='_blank' rel='noopener noreferrer' {...props} />
}

const Callout = ({ children }) => (
	<div className='w-full px-4 py-3.5 bg-[#f1f1f2] dark:bg-[#1C1C1C] rounded-lg flex gap-2 callout'>
		<div className='w-5 h-5 mt-1'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='512'
				height='512'
				viewBox='0 0 512 512'
				className='w-5 h-5'
			>
				<g>
					<path
						fill='#fffa50'
						d='M432 176C432 78.799 353.201 0 256 0S80 78.799 80 176c0 61.756 31.873 115.99 80 147.4V352h192v-28.6c48.127-31.41 80-85.644 80-147.4z'
					></path>
					<path
						fill='#ffce33'
						d='M256 512c-53.019 0-96-42.981-96-96v-64h192v64c0 53.019-42.981 96-96 96zM320 160c-35.346 0-64 28.654-64 64 0-35.346-28.654-64-64-64h-32v32c0 35.346 28.654 64 64 64h16v96h32v-96h16c35.346 0 64-28.654 64-64v-32z'
					></path>
					<path fill='#ffa65c' d='M240 352h32v64h-32z'></path>
				</g>
			</svg>
		</div>
		<p>{children}</p>
	</div>
)

const Github = ({ repo = '' }) => {
	return (
		<a
			target='_blank'
			rel='noopener noreferrer'
			href={`https://github.com/itscarlosecp/tutorials/tree/main/${repo}`}
			className='no-underline'
		>
			<button className='px-2 py-1 rounded bg-[#1C1C1C] text-white inline-flex gap-1 items-center text-sm'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					viewBox='0 0 24 24'
					fill='currentColor'
				>
					<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
				</svg>
				Tutorials
			</button>
		</a>
	)
}

const MDXComponents = {
	Image,
	a: CustomLink,
	Callout,
	Github,
}

export default MDXComponents
