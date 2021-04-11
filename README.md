# Hey, I'm Carlos Castillo

I'm a developer from Nicaragua, currently living in Argentina and studying computer engineering @ University of Buenos Aires.
Welcome to my personal portfolio's repo. This project was inspired by [Tailwind Components Blog](https://tailwindcomponents.com/blog), [NextJS Blog](https://nextjs.org/blog), [TailwindCSS Blog](https://blog.tailwindcss.com/), [Tailwind NextJS Starter Blog Template](https://github.com/timlrx/tailwind-nextjs-starter-blog) and [Lee Robinson's Personal Blog](https://leerob.io).

## About this project

This project was built with [NextJS](https://nextjs.org) as the front-end framework and [TailwindCSS](https://tailwindcss.com) to apply the styling. It follows the JAMStack approach and integrates markdown renderization techniques to display the blog posts written in this filetype, with the help of libraries such as [rehype](https://github.com/rehypejs/rehype), [remark](https://github.com/remarkjs/remark) and specially the offical NextJS MDX plugin [@next/mdx](https://github.com/vercel/next.js/tree/canary/packages/next-mdx). 

It focuses heavily in SEO and rendering performance. It uses [preact](https://preactjs.com/) in the production build to lower the total bundle size and get an almost perfect score in Google's Lighthouse (ran in incognito). I'm also using [Next SEO](https://github.com/garmeeh/next-seo) along side [gray-matter](https://github.com/jonschlinkert/gray-matter) to handle this. You can install this application as a PWA and it uses Firebase to keep track of the analytics.
