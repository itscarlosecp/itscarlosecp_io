import type { Post, Project } from '@lib/types'
import Container from '@components/Container'
import Page, { PageHeader, PageSection } from '@layouts/Page'
import PostItem from '@components/PostItem'
import { getFeaturedPosts } from '@lib/db'

interface Props {
	featuredPosts: Post[]
}

const index = ({ featuredPosts }: Props) => {
	return (
		<Container>
			<Page>
				{/* Contenedor Introductorio */}
				<PageHeader
					title="Hey, I'm Carlos Castillo"
					description="
					I'm a developer from Nicaragua, currently living in
					Argentina and studying computer engineering @ University of
					Buenos Aires.
				"
				/>

				{/* Contenedor Featured Posts */}
				<PageSection title='Fetured Posts'>
					{featuredPosts.map((post) => (
						<PostItem key={post.id} {...post} />
					))}
				</PageSection>

				{/* Contenedor Projects */}
			</Page>
		</Container>
	)
}

export const getStaticProps = async () => {
	const featuredPosts = await getFeaturedPosts()

	return {
		props: {
			featuredPosts,
		},
	}
}

export default index
