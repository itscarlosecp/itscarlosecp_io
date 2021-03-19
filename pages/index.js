import { PageSeo } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import PostItem from '@/components/PostItem'
import siteMetadata from '@/data/siteMetadata'

const Home = ({ featuredPostsFrontMatter }) => {
	return (
		<>
			<PageSeo
				title={siteMetadata.title}
				description={siteMetadata.description}
				url={siteMetadata.url}
			/>
			<h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
				Hey, I'm Carlos Castillo
			</h1>
			<p className='prose text-gray-600 dark:text-gray-400 mb-16'>
				I'm a developer from Nicaragua, currently living in Argentina
				and studying computer engineering @ University of Buenos Aires.
			</p>
			<h2 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white'>
				Featured Posts
			</h2>
			{featuredPostsFrontMatter.map((frontMatter) => (
				<PostItem key={frontMatter.slug} {...frontMatter} />
			))}
			<h2 className='mt-8 font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white'>
				Projects
			</h2>
		</>
	)
}

export const getStaticProps = async () => {
	const allPostsFrontMatter = await getAllFilesFrontMatter('blog')

	return {
		props: { featuredPostsFrontMatter: allPostsFrontMatter },
	}
}

export default Home
