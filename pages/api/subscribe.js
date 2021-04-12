import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
	apiKey: process.env.MAILCHIMP_API_KEY,
	server: process.env.MAILCHIMP_API_SERVER,
})

export default async (req, res) => {
	if (!req.body.email) {
		return res.status(400).json({ error: 'Email is required' })
	}

	try {
		const APIres = await mailchimp.lists.addListMember(
			process.env.MAILCHIMP_AUDIENCE_ID,
			{
				email_address: req.body.email,
				status: 'subscribed',
			}
		)

		return res.status(201).json({ error: '' })
	} catch (err) {
		console.error(err)

		const errorMsg =
			err.response.body.title === 'Member Exists'
				? err.response.body.detail.split('. ')[0] + '.'
				: err.message || err.toString()

		return res
			.status(500)
			.json({ error: `Error ${err.status}! ${errorMsg}` })
	}
}
