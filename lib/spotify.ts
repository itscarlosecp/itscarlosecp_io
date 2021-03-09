export const getAccessToken = async () => {
	const res = await fetch(
		'https://accounts.spotify.com/api/token?grant_type=client_credentials',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization:
					'Basic ' +
					'ZTRhOWQxMzI1ZjM0NDczZmJjMTIzMzcwNzIwNjVhZWI6OWNkNmMwMWU3Nzg4NGFmMzkzYTAwMmMwMjBjMTQ5YWY=',
			},
		}
	)

	const data = await res.json()
	console.log(data)
}

export const getTopTracks = async () => {
	const res = await fetch(
		'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10',
		{
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/application/json',
				Authorization: `Bearer ${process.env.SPOTIFY_OAUTH_TOKEN}`,
			},
		}
	)

	const data = await res.json()
	console.log(data)
	return data
}
