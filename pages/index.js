import { PageSeo } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { Section, Paragraph } from '@/components/Page'
import PostItem from '@/components/PostItem'
import RepoCard from '@/components/RepoCard'
import siteMetadata from '@/data/siteMetadata'
import Subscribe from '@/components/Subscribe'

const Home = ({ featuredPostsFrontMatter }) => {
	return (
		<>
			<PageSeo
				title='itscarlosecp – Web Development Enthusiast'
				description={siteMetadata.description}
				url={siteMetadata.siteUrl}
			/>
			<div className='flex flex-col mb-16'>
				<h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
					Hey, I'm Carlos Castillo
				</h1>
				<Paragraph
					content={`I'm a developer from Nicaragua, currently living in
					Argentina and studying Computer Engineering @ University of
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
					description={`My personal blog and portfolio. This blog was built with NextJS and TailwindCSS using the JAMStack approach. It features light and dark mode, markdown, code and katex rendering, among other cool stuff. `}
					href={`${siteMetadata.github}/itscarlosecp_dev`}
					icon='nextjs'
				/>
				<RepoCard
					title='.dotfiles'
					description={`I love programming in my own custom enviroment. In this repository I store and share my most important config files for the various applications I normally use in my programming workflow such as my terminal emulator and code editor.`}
					href={`${siteMetadata.github}/.dotfiles`}
					icon='vscode'
				/>
			</Section>
			<Subscribe />
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
