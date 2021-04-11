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
	<div className='w-full px-4 py-3.5 bg-gray-200 dark:bg-[#1C1C1C] rounded-lg flex gap-2 callout border border-gray-300 dark:border-gray-700'>
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

const MDXComponents = {
	Image,
	a: CustomLink,
	Callout,
}

export default MDXComponents
