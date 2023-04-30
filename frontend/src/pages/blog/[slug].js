/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { formatDate } from '@/lib/formatDate.js'
import { fetcher } from '@/lib/api.js'

import { Container } from '@/components/Container.jsx'
import { ArrowLeftIcon } from '@/components/Icons/ArrowLeftIcon.jsx'

const customStyle = {
  backgroundColor: '#18181B',
}

const Blog = ({ blog }) => {
  const p = blog?.data?.[0]?.attributes

  let router = useRouter()
  return (
    <>
      <Head>
        <title>Title</title>
        <meta name="description" content="description" />
      </Head>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </button>

            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {''}
                </h1>
                <time
                  dateTime={p.published}
                  className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{formatDate(p.published)}</span>
                </time>
              </header>
              <div id="blog" className="max-w-2xl scroll-mt-40 scroll-smooth ">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {p.title}
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  {p.description}
                </p>
              </div>

              <div className="max-w-full py-10 lg:max-w-full">
                <img
                  src="/img.png"
                  alt=""
                  className="aspect-square h-[250px] w-full rounded-xl bg-zinc-100 object-cover dark:bg-zinc-800 lg:h-[450px]"
                />
              </div>
              <div className="max-w-full py-10 lg:max-w-full">
                <article className="prose dark:prose-invert dark:prose-pre:bg-[#18181B]">
                  <ReactMarkdown
                    children={p.body}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                          <SyntaxHighlighter
                            style={tomorrowNight}
                            customStyle={customStyle}
                            children={String(children).replace(/\n$/, '')}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                          />
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        )
                      },
                    }}
                  />
                </article>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Blog

export async function getStaticPaths() {
  const blogs = await fetcher(`${process.env.NEXT_PUBLIC_URL}/blogs?populate=*`)
  const paths = blogs?.data?.map((p) => ({
    params: {
      slug: p.attributes.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const blog = await fetcher(
    `${process.env.NEXT_PUBLIC_URL}/blogs?populate=*&filters[slug][$eq]=${slug}`
  )
  const blogs = await fetcher(
    `${process.env.NEXT_PUBLIC_URL}/blogs?populate=*&[filters][slug][$ne]=${slug}`
  )

  return {
    props: {
      blog,
      blogs,
    },
  }
}
