import { NextSeo, ArticleJsonLd } from 'next-seo'
import siteMetadata from '@/data/siteMetadata'

export const SEO = {
	title: siteMetadata.title,
	description: siteMetadata.description,
	openGraph: {
		type: 'website',
		locale: siteMetadata.language,
		url: siteMetadata.siteUrl,
		title: siteMetadata.title,
		description: siteMetadata.description,
		images: [
			{
				url: `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`,
				alt: siteMetadata.title,
				width: 1200,
				height: 600,
			},
		],
	},
	twitter: {
		handle: siteMetadata.twitter,
		site: siteMetadata.twitter,
		cardType: 'summary_large_image',
	},
	additionalMetaTags: [
		{
			name: 'author',
			content: siteMetadata.author,
		},
	],
}

export const PageSeo = ({ title, description, url }) => {
	return (
		<NextSeo
			title={`${title} – ${siteMetadata.title}`}
			description={description}
			canonical={url}
			openGraph={{
				url,
				title,
				description,
			}}
		/>
	)
}

export const BlogSeo = ({
	title,
	summary,
	publishedAt,
	url,
	tags,
	images = [],
}) => {
	const date = new Date(publishedAt).toISOString()

	let imagesArr =
		images.length === 0
			? [siteMetadata.socialBanner]
			: typeof images === 'string'
			? [images]
			: images

	const featuredImages = imagesArr.map((img) => {
		return {
			url: `${siteMetadata.siteUrl}${img}`,
			alt: title,
		}
	})

	return (
		<>
			<NextSeo
				title={`${title} – ${siteMetadata.title}`}
				description={summary}
				canonical={url}
				openGraph={{
					type: 'article',
					article: {
						publishedTime: date,
						authors: [`${siteMetadata.siteUrl}/about`],
						tags,
					},
					url,
					title,
					description: summary,
					images: featuredImages,
				}}
				additionalMetaTags={[
					{
						name: 'twitter:image',
						content: featuredImages[0].url,
					},
				]}
			/>
			<ArticleJsonLd
				authorName={siteMetadata.author}
				datePublished={date}
				description={summary}
				images={featuredImages}
				publisherName={siteMetadata.author}
				title={title}
				url={url}
			/>
		</>
	)
}
