const RepoCard = ({ title, description, href, icon }) => {
	return (
		<a
			className='mb-4 hover:shadow'
			href={href}
			aria-label={title}
			target='_blank'
			rel='noopener noreferrer'
		>
			<div className='flex items-center border border-gray-200 dark:border-gray-800 rounded p-4'>
				{icon == 'nextjs' && (
					<div className='w-8 h-8 ml-2 mr-4'>
						<svg
							className='w-8 h-8 min-w-lg text-gray-900 dark:text-gray-100'
							viewBox='.5 -.2 1023 1024.1'
						>
							<g fill='currentColor'>
								<path d='m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z' />
								<path d='m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z' />
							</g>
						</svg>
					</div>
				)}
				{icon == 'vscode' && (
					<div className='w-8 h-8 ml-2 mr-4'>
						<svg
							className='w-8 h-8'
							viewBox='0 0 256 256'
							fill='none'
						>
							<mask
								id='a'
								maskUnits='userSpaceOnUse'
								x={0}
								y={0}
								width={256}
								height={256}
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M181.534 254.252a15.934 15.934 0 0012.7-.488l52.706-25.361a16.002 16.002 0 009.06-14.42V42.018c0-6.15-3.522-11.754-9.06-14.42L194.234 2.238a15.939 15.939 0 00-18.185 3.097l-100.9 92.052-43.95-33.361a10.655 10.655 0 00-13.614.605L3.49 77.453c-4.648 4.227-4.653 11.54-.011 15.774L41.593 128 3.478 162.773c-4.642 4.235-4.637 11.547.011 15.775l14.097 12.822a10.655 10.655 0 0013.613.606l43.95-33.362 100.9 92.053a15.915 15.915 0 005.485 3.585zm10.505-184.367L115.479 128l76.56 58.115V69.885z'
									fill='#fff'
								/>
							</mask>
							<g mask='url(#a)'>
								<path
									d='M246.94 27.638L194.193 2.241a15.947 15.947 0 00-18.194 3.092L3.324 162.773c-4.645 4.235-4.64 11.547.011 15.775L17.44 191.37a10.667 10.667 0 0013.622.606l207.941-157.75c6.976-5.291 16.996-.316 16.996 8.44v-.612a16 16 0 00-9.059-14.416z'
									fill='#0065A9'
								/>
								<g filter='url(#filter0_d)'>
									<path
										d='M246.94 228.362l-52.747 25.397a15.95 15.95 0 01-18.194-3.092L3.324 93.227c-4.645-4.234-4.64-11.547.011-15.775L17.44 64.63a10.667 10.667 0 0113.622-.605l207.941 157.748c6.976 5.292 16.996.317 16.996-8.44v.613a16.001 16.001 0 01-9.059 14.416z'
										fill='#007ACC'
									/>
								</g>
								<g filter='url(#filter1_d)'>
									<path
										d='M194.196 253.763A15.955 15.955 0 01176 250.667c5.904 5.904 16 1.722 16-6.628V11.961c0-8.35-10.096-12.532-16-6.628a15.955 15.955 0 0118.196-3.097L246.934 27.6A16 16 0 01256 42.017v171.965a16 16 0 01-9.066 14.419l-52.738 25.361z'
										fill='#1F9CF0'
									/>
								</g>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M181.378 254.252a15.936 15.936 0 0012.699-.488l52.706-25.362a16 16 0 009.061-14.419V42.018c0-6.15-3.522-11.754-9.06-14.42L194.077 2.238a15.939 15.939 0 00-18.185 3.096l-100.9 92.053-43.95-33.361a10.655 10.655 0 00-13.613.605L3.333 77.452c-4.648 4.228-4.653 11.54-.011 15.775L41.436 128 3.322 162.773c-4.642 4.235-4.637 11.547.011 15.775L17.43 191.37a10.655 10.655 0 0013.614.606l43.95-33.362 100.899 92.053a15.919 15.919 0 005.486 3.585zm10.505-184.367L115.323 128l76.56 58.115V69.885z'
									fill='url(#paint0_linear)'
									opacity={0.25}
								/>
							</g>
							<defs>
								<filter
									id='filter0_d'
									x={-21.4896}
									y={40.5225}
									width={298.822}
									height={236.149}
									filterUnits='userSpaceOnUse'
									colorInterpolationFilters='sRGB'
								>
									<feFlood
										floodOpacity={0}
										result='BackgroundImageFix'
									/>
									<feColorMatrix
										in='SourceAlpha'
										values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
									/>
									<feOffset />
									<feGaussianBlur stdDeviation={10.6667} />
									<feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
									<feBlend
										mode='overlay'
										in2='BackgroundImageFix'
										result='effect1_dropShadow'
									/>
									<feBlend
										in='SourceGraphic'
										in2='effect1_dropShadow'
										result='shape'
									/>
								</filter>
								<filter
									id='filter1_d'
									x={154.667}
									y={-20.6735}
									width={122.667}
									height={297.347}
									filterUnits='userSpaceOnUse'
									colorInterpolationFilters='sRGB'
								>
									<feFlood
										floodOpacity={0}
										result='BackgroundImageFix'
									/>
									<feColorMatrix
										in='SourceAlpha'
										values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
									/>
									<feOffset />
									<feGaussianBlur stdDeviation={10.6667} />
									<feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
									<feBlend
										mode='overlay'
										in2='BackgroundImageFix'
										result='effect1_dropShadow'
									/>
									<feBlend
										in='SourceGraphic'
										in2='effect1_dropShadow'
										result='shape'
									/>
								</filter>
								<linearGradient
									id='paint0_linear'
									x1={127.844}
									y1={0.659988}
									x2={127.844}
									y2={255.34}
									gradientUnits='userSpaceOnUse'
								>
									<stop stopColor='#fff' />
									<stop
										offset={1}
										stopColor='#fff'
										stopOpacity={0}
									/>
								</linearGradient>
							</defs>
						</svg>
					</div>
				)}
				<div>
					<h4 className='text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100'>
						{title}
					</h4>
					<p className='leading-6 text-gray-600 dark:text-gray-400'>
						{description}
					</p>
				</div>
			</div>
		</a>
	)
}

export default RepoCard
