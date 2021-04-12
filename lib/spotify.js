import fetch from 'isomorphic-unfetch'
import querystring from 'querystring'

export const getAccessToken = async () => {
	const parsedSecret = Buffer.from(
		`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
	).toString('base64')

	const res = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			Authorization: `Basic ${parsedSecret}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: querystring.stringify({
			grant_type: 'refresh_token',
			refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
		}),
	})

	return res.json()
}

export const getTopTracks = async () => {
	const { access_token } = await getAccessToken()

	const res = await fetch(
		'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5',
		{
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		}
	)

	const data = await res.json()
	return data.items
}
