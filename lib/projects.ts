import type { Project } from './types'
import { firestore } from '@lib/firebase'

export const getProjects = async () => {
	const projectsRef = firestore.collection('projects')
	const projects = (await projectsRef.get()).docs.map((item) => item.data())

	return projects as Project[]
}
