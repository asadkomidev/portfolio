import { Divider } from '@/components/Divider.jsx'
import { Language } from '@/components/Icons/Language.jsx'
import { SkillIcon } from '@/components/Icons/SkillIcon.jsx'
import Head from 'next/head.js'
import React from 'react'

export const Skills = ({ stack }) => {
  return (
    <>
      <div
        id="skills"
        className="grid scroll-mt-40 grid-cols-1  gap-y-16 scroll-smooth lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 "
      >
        <div className="lg:pr-20">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {stack?.data.attributes.heading}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {stack?.data.attributes.description}
          </p>
        </div>
        <div>
          <div className=" rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/40">
            <Divider title={'Development'} className="mb-10" />
            <SkillIcon />

            <Divider title={'Languages'} className="py-10" />
            <Language />
          </div>
        </div>
      </div>
    </>
  )
}
