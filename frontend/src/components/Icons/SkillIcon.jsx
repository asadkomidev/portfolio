/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

import { DiNodejs, DiReact } from 'react-icons/di'
import {
  SiStrapi,
  SiTailwindcss,
  SiShopify,
  SiWordpress,
  SiNodedotjs,
  SiSpring,
  SiMongodb,
} from 'react-icons/si'

export const SkillIcon = () => {
  return (
    <div className="grid w-full max-w-xl grid-cols-4 items-center gap-y-12 text-center sm:gap-y-14 lg:mx-0">
      <SiNodedotjs size={50} className="text-zinc-800 dark:text-white " />
      <DiReact size={60} className="text-zinc-800 dark:text-white" />
      <SiStrapi size={40} className="text-zinc-800 dark:text-white" />
      <SiTailwindcss size={60} className="text-zinc-800 dark:text-white" />
      <SiSpring size={50} className="text-zinc-800 dark:text-white" />
      <SiMongodb size={50} className="text-zinc-800 dark:text-white" />
      <SiShopify size={50} className="text-zinc-800 dark:text-white" />
      <SiWordpress size={50} className="text-zinc-800 dark:text-white" />
    </div>
  )
}
