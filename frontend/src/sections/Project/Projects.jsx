import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'

import { BsLink45Deg } from 'react-icons/bs'
import Link from 'next/link'

export const Projects = ({ portfolios, project }) => {
  return (
    <>
      <div id="portfolio" className="scroll-mt-40 scroll-smooth">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {project?.data.attributes.heading}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {project?.data.attributes.description}
          </p>
        </div>

        <div className="mt-16 sm:mt-20 ">
          <ul
            role="list"
            className="grid  grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {portfolios?.data.map((project) => (
              <li
                key={project.attributes.name}
                className="rounded-2xl border border-zinc-200 p-3  dark:border-zinc-700/40 "
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-300 dark:ring-0">
                  <Image
                    src={project.attributes.logo.data.attributes.url}
                    alt=""
                    width={500}
                    height={500}
                    className="h-8 w-8"
                    unoptimized
                  />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Link href={project.attributes.website}>
                    {project.attributes.name}
                  </Link>
                </h2>
                <Card.Description>
                  {project.attributes.description}
                </Card.Description>
                <div className="flex ">
                  <p className="relative z-10 mt-6 flex pr-5 text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                    <BsLink45Deg className="h-5 w-5 flex-none" />
                    <span className="">Github</span>
                  </p>
                  <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                    <BsLink45Deg className="h-5 w-5 " />
                    <span className="">Live Website</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
