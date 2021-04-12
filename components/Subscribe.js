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
		<div className='w-full p-6 bg-blue-50 dark:bg-[#080935] border border-blue-200 dark:border-blue-900 rounded'>
			<p className='text-xl font-bold text-blue-900 dark:text-blue-100'>
				Subscribe to my newsletter
			</p>
			<p className='mt-1 text-gray-800 dark:text-gray-200'>
				Stay tuned! I'll only send emails when new content is posted or
				when new features are dropped. No spam.
			</p>
			<form
				onSubmit={subscribe}
				className='mt-4 flex flex-col sm:flex-row gap-2'
			>
				<input
					id='email-input'
					name='email'
					placeholder='you@awesome.com'
					className='flex-auto px-4 py-2 rounded bg-white dark:bg-gray-800'
					ref={inputEl}
					required
					type='email'
				/>
				<button
					type='submit'
					className='px-4 py-2 sm:py-0 bg-gray-200 dark:bg-blue-300 rounded font-bold text-black dark:text-blue-900'
				>
					Subscribe
				</button>
			</form>
			{message && (
				<div className='mt-4 text-gray-800 dark:text-gray-200'>
					{message}
				</div>
			)}
		</div>
	)
}

export default Subscribe
