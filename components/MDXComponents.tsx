import Link from 'next/link'
import Image from 'next/image'

interface Props {
	href: string
	[x: string]: string
}

const CustomLink = (props: Props) => {
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
}

const MDXComponents = {
	Image,
	a: CustomLink,
}

export default MDXComponents
