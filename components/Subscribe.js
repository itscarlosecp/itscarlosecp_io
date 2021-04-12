import * as React from 'react'

const Subscribe = () => {
	const inputEl = React.useRef(null)
	const [message, setMessage] = React.useState('')

	const subscribe = async (e) => {
		e.preventDefault()

		const res = await fetch('/api/subscribe', {
			body: JSON.stringify({
				email: inputEl.current.value,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		})

		const { error } = await res.json()

		if (error) {
			setMessage(error)
			return
		}

		inputEl.current.value = ''
		setMessage('Success! 🎉 You are now subscribed to the newsletter.')
	}

	return (
		<div className='w-full p-6 bg-blue-50 border border-blue-200 rounded'>
			<p className='text-xl font-bold text-blue-900'>
				Subscribe to my newsletter
			</p>
			<p className='mt-1 text-gray-800'>
				Stay tuned! I'll only send emails when new content is posted or
				when new features are dropped. No spam.
			</p>
			<form onSubmit={subscribe} className='mt-4 flex gap-2'>
				<input
					id='email-input'
					name='email'
					placeholder='you@awesome.com'
					className='flex-auto px-4 py-2 rounded'
					ref={inputEl}
					required
					type='email'
				/>
				<button
					type='submit'
					className='px-4 bg-gray-200 rounded font-bold text-black'
				>
					Subscribe
				</button>
			</form>
			{message && <div className='mt-4'>{message}</div>}
		</div>
	)
}

export default Subscribe
