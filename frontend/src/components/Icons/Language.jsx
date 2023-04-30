import React from 'react'
import { DiJava, DiReact } from 'react-icons/di'
import {
  SiStrapi,
  SiTailwindcss,
  SiShopify,
  SiWordpress,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
} from 'react-icons/si'

export const Language = () => {
  return (
    <div className="grid w-full max-w-xl grid-cols-4 items-center gap-y-12  text-center sm:gap-y-14 lg:mx-0">
      <SiTypescript size={50} className="dark:text-white" />
      <DiJava size={60} className="dark:text-white" />
      <SiPython size={50} className="dark:text-white" />
      <SiJavascript size={50} className="dark:text-white" />
    </div>
  )
}
