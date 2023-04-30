import Head from 'next/head'

import { Container } from '@/components/Container'
import { AboutSection } from '@/sections/About/AboutSection.jsx'
import { Work } from '@/sections/Work/Work.jsx'
import { Projects } from '@/sections/Project/Projects.jsx'
import { Skills } from '@/sections/Skills/Skills.jsx'
import { Blog } from '@/sections/Blog/Blog.jsx'
import { Divider } from '@/components/Divider.jsx'
import { fetcher } from '@/lib/api.js'

export default function Home({
  blogs,
  works,
  portfolios,
  about,
  experience,
  project,
  stack,
  article,
}) {
  return (
    <>
      <Head>
        <title>Asad Abdalla - Software designer</title>
        <meta
          name="description"
          content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head>
      <Container className="mt-16  sm:mt-32">
        <AboutSection about={about} />
        <Divider title="Work & Experience" className="mb-10 mt-24" />
        <Work works={works} experience={experience} />
        <Divider title="Portfolio" className="mb-10 mt-24" />
        <Projects portfolios={portfolios} project={project} />
        <Divider title="Tech Stack" className="mb-10 mt-24" />
        <Skills stack={stack} />
        <Divider title="Blog" className="mb-10 mt-24" />
        <Blog blogs={blogs} article={article} />
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const blogs = await fetcher(
    `${process.env.NEXT_PUBLIC_URL}/blogs?populate=*&pagination[pageSize]=2`
  )
  const works = await fetcher(
    `${process.env.NEXT_PUBLIC_URL}/works?populate=*&pagination[pageSize]=4`
  )
  const portfolios = await fetcher(
    `${process.env.NEXT_PUBLIC_URL}/portfolios?populate=*&pagination[pageSize]=4`
  )
  const about = await fetcher(`${process.env.NEXT_PUBLIC_URL}/about?populate=*`)
  const experience = await fetcher(
    `${process.env.NEXT_PUBLIC_URL}/experience?populate=*`
  )
  const project = await fetcher(
    `${process.env.NEXT_PUBLIC_URL}/project?populate=*`
  )
  const stack = await fetcher(`${process.env.NEXT_PUBLIC_URL}/stack?populate=*`)
  const article = await fetcher(
    `${process.env.NEXT_PUBLIC_URL}/article?populate=*`
  )
  return {
    props: {
      blogs,
      works,
      portfolios,
      about,
      experience,
      project,
      stack,
      article,
    },
  }
}
