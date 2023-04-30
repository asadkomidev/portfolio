import React from 'react'

import { NewsLetter } from './NewsLetter.jsx'
import { Article } from './Article.jsx'
import Link from 'next/link.js'
import { useRouter } from 'next/router.js'

export const Blog = ({ blogs, children, article }) => {
  let isHomePage = useRouter().pathname === '/'

  return (
    <>
      {isHomePage && (
        <div id="blog" className="max-w-2xl scroll-mt-40 scroll-smooth ">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {article?.data.attributes.heading}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {article?.data.attributes.description}
          </p>
          <div className="relative z-10 mt-8 flex items-center  text-sm font-medium text-blue-500">
            <Link href="/blogs">View all blogs</Link>
          </div>
        </div>
      )}
      <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 pt-16 lg:max-w-none lg:grid-cols-2">
        <div className="flex flex-col">
          <div className="flex flex-col gap-16">
            {blogs?.data.map((blog) => (
              <Article key={blog.attributes.slug} blog={blog} />
            ))}
          </div>

          <div>{children}</div>
        </div>
        <div className="space-y-10 lg:pl-16 xl:pl-24">
          <NewsLetter />
        </div>
      </div>
    </>
  )
}
