import { InferGetStaticPropsType } from 'next'

const index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {}

export const getStaticProps = async () => {
	return {
		props: {
			posts: [],
		},
	}
}

export default index
