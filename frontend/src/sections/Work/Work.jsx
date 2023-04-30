import React from 'react'
import Image from 'next/image'
import { IoMdDownload } from 'react-icons/io'

import { Button } from '@/components/Button.jsx'
import { BriefcaseIcon } from '@/components/Icons/BriefcaseIcon.jsx'

export const Work = ({ works, experience }) => {
  return (
    <>
      <div
        id="work"
        className="grid scroll-mt-40 grid-cols-1 gap-y-16 scroll-smooth lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 "
      >
        <div className="lg:pr-20">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {experience?.data.attributes.heading}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {experience?.data.attributes.description}
          </p>
        </div>
        <div>
          <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <BriefcaseIcon className="h-6 w-6 flex-none " />
              <span className="ml-3">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
              {works?.data.map((role, roleIndex) => (
                <li key={roleIndex} className="flex gap-4">
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-300 dark:ring-0 ">
                    <Image
                      src={
                        role.attributes.logo.data.attributes.formats.thumbnail
                          .url
                      }
                      width={500}
                      height={500}
                      alt=""
                      className="h-7 w-7 "
                      unoptimized
                    />
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {role.attributes.company}
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                      {role.attributes.title}
                    </dd>
                    <dt className="sr-only">Date</dt>
                    <dd
                      className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                      aria-label={`${
                        role.attributes.start ?? role.attributes.start
                      } until ${role.attributes.end ?? role.attributes.end}`}
                    >
                      <time
                        dateTime={
                          role.attributes.start ?? role.attributes.start
                        }
                      >
                        {role.attributes.start ?? role.attributes.start}
                      </time>{' '}
                      <span aria-hidden="true">—</span>{' '}
                      <time
                        dateTime={role.attributes.end ?? role.attributes.end}
                      >
                        {role.attributes.end ?? role.attributes.end}
                      </time>
                    </dd>
                  </dl>
                </li>
              ))}
            </ol>
            <Button
              href="/Resume.pdf"
              variant="primary"
              className="group mt-6 w-full"
              target="_blank"
              download="Resume"
            >
              Download CV
              <IoMdDownload className="h-4 w-4  stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
