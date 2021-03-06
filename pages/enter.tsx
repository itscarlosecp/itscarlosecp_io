import { auth, githubAuthProvider, googleAuthProvider } from '../firebase'

const enter = () => {
	const user = null
	const username = null

	return (
		<div>
			<SignInGoogle />
			<SignInGithub />
			<SignOut />
		</div>
	)
}

const SignInGoogle = () => {
	const signInGoogle = async () => {
		await auth.signInWithPopup(googleAuthProvider)
	}

	return <button onClick={signInGoogle}>SignIn with google</button>
}

const SignInGithub = () => {
	const signInGithub = async () => {
		await auth.signInWithPopup(githubAuthProvider)
	}

	return <button onClick={signInGithub}>SignIn Github</button>
}

const SignOut = () => {
	return <button onClick={() => auth.signOut()}>SignOut</button>
}

export default enter
