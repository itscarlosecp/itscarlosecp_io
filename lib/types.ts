export type Post = {
	id: string
	uuid: string
	title: string
	slug: string
	html: string
	comment_id: string
	feature_image: string
	featured: boolean
	visibility: string
	send_email_when_published: boolean
	created_at: string
	updated_at: string
	published_at: string
	custom_excerpt: string
	codeinjection_head?: null
	codeinjection_foot?: null
	custom_template?: null
	canonical_url?: null
	authors?: AuthorsEntityOrPrimaryAuthor[] | null
	primary_author: AuthorsEntityOrPrimaryAuthor
	url: string
	excerpt: string
	reading_time: number
	og_image?: null
	og_title?: null
	og_description?: null
	twitter_image?: null
	twitter_title?: null
	twitter_description?: null
	meta_title: string
	meta_description: string
	email_subject?: null
}

type AuthorsEntityOrPrimaryAuthor = {
	id: string
	name: string
	slug: string
	profile_image?: null
	cover_image?: null
	bio?: null
	website?: null
	location?: null
	facebook?: null
	twitter?: null
	meta_title?: null
	meta_description?: null
	url: string
}

export type GithubProfile = {
	login: string
	id: number
	node_id: string
	avatar_url: string
	gravatar_id: string
	url: string
	html_url: string
	followers_url: string
	following_url: string
	gists_url: string
	starred_url: string
	subscriptions_url: string
	organizations_url: string
	repos_url: string
	events_url: string
	received_events_url: string
	type: string
	site_admin: boolean
	name: string
	company: string
	blog: string
	location: string
	email?: null
	hireable?: null
	bio: string
	twitter_username: string
	public_repos: number
	public_gists: number
	followers: number
	following: number
	created_at: string
	updated_at: string
}

export type Track = {
	album: Album
	artists: ArtistsEntity[]
	available_markets?: string[] | null
	disc_number: number
	duration_ms: number
	explicit: boolean
	external_ids: ExternalIds
	external_urls: ExternalUrls
	href: string
	id: string
	is_local: boolean
	name: string
	popularity: number
	preview_url: string
	track_number: number
	type: string
	uri: string
}

type Album = {
	album_type: string
	artists?: ArtistsEntity[] | null
	available_markets?: string[] | null
	external_urls: ExternalUrls
	href: string
	id: string
	images?: ImagesEntity[] | null
	name: string
	release_date: string
	release_date_precision: string
	total_tracks: number
	type: string
	uri: string
}

type ArtistsEntity = {
	external_urls: ExternalUrls
	href: string
	id: string
	name: string
	type: string
	uri: string
}

type ExternalUrls = {
	spotify: string
}

type ImagesEntity = {
	height: number
	url: string
	width: number
}

type ExternalIds = {
	isrc: string
}

export type Project = {
	name: string
	description: string
	iconId: string
	refUrl: string
}
