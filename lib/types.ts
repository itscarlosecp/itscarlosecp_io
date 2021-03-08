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
