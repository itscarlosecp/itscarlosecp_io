import type { Project } from './types'
import { firestore } from '@lib/firebase'

export const getProjects = async () => {
	const projects = []

	await firestore
		.collection('projects')
		.get()
		.then((querySnapshot) =>
			querySnapshot.forEach((doc) => projects.push(doc.data()))
		)

	return projects as Project[]
}
