import { PageSeo } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { Section, Paragraph } from '@/components/Page'
import PostItem from '@/components/PostItem'
import RepoCard from '@/components/RepoCard'
import siteMetadata from '@/data/siteMetadata'

const Home = ({ featuredPostsFrontMatter }) => {
	return (
		<>
			<PageSeo
				title='Home'
				description={siteMetadata.description}
				url={siteMetadata.url}
			/>
			<div className='flex flex-col mb-16'>
				<h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
					Hey, I'm Carlos Castillo
				</h1>
				<Paragraph
					content={`I'm a developer from Nicaragua, currently living in
					Argentina and studying computer engineering @ University of
					Buenos Aires.`}
				/>
			</div>
			<Section title='Featured Posts'>
				{featuredPostsFrontMatter.map((frontMatter) => (
					<PostItem key={frontMatter.slug} {...frontMatter} />
				))}
			</Section>
			<Section title='Projects'>
				<RepoCard
					title='Blog'
					description='About
Saving my own development settings files. You are free to use them and modify them, this are just the ones I use in my day to day basis. I use Ubuntu or WSL2 sometimes, but the programs I use should be available on every unix-based os.'
					href={`${siteMetadata.github}/itscarlosecp_dev`}
					icon='nextjs'
				/>
				<RepoCard
					title='.dotfiles'
					description='About
Saving my own development settings files. You are free to use them and modify them, this are just the ones I use in my day to day basis. I use Ubuntu or WSL2 sometimes, but the programs I use should be available on every unix-based os.'
					href={`${siteMetadata.github}/.dotfiles`}
					icon='vscode'
				/>
			</Section>
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
