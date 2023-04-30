import { useState } from 'react'
import Head from 'next/head'
import useSWR from 'swr'
import { useRouter } from 'next/router'

import { Blog } from '@/sections/Blog/Blog.jsx'
import { fetcher } from '@/lib/api.js'

import { Container } from '@/components/Container.jsx'
import { PaginationToggler } from '@/components/PaginationToggler.jsx'
import { ArrowLeftIcon } from '@/components/Icons/ArrowLeftIcon.jsx'

export default function Blogs({ blogs }) {
  const [pageIdx, setPageidx] = useState(1)
  let router = useRouter()
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/blogs?pagination[page]=${pageIdx}&pagination[pageSize]=3`,
    fetcher,
    {
      fallbackData: blogs,
    }
  )
  return (
    <>
      <Head>
        <title>Asad Abdalla - Blogs</title>
        <meta
          name="description"
          content="I’m Asad, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head>
      <Container className="mt-16  sm:mt-32">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Go back to blogs"
          className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
        >
          <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
        </button>
        <Blog blogs={data}>
          <PaginationToggler
            data={data}
            pageIdx={pageIdx}
            setPageidx={setPageidx}
          />
        </Blog>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const blogs = await fetcher(
    `${process.env.NEXT_PUBLIC_URL}/blogs?pagination[page]=1&pagination[pageSize]=3`
  )

  return {
    props: {
      blogs,
    },
  }
}
