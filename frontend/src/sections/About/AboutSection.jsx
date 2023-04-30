import React from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

import { MailIcon } from '@/components/Icons/MailIcon.jsx'
import { SocialLink } from '@/components/Links/SocialLink.jsx'
import { Twitter } from '@/components/Icons/SocialIcons/Twitter.jsx'
import { Instagram } from '@/components/Icons/SocialIcons/Instagram.jsx'
import { Github } from '@/components/Icons/SocialIcons/Github.jsx'
import { LinkedIn } from '@/components/Icons/SocialIcons/LinkedIn.jsx'

export const AboutSection = ({ about }) => {
  return (
    <div
      id="about"
      className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
    >
      <div className=" lg:pr-20">
        <div className="max-w-full px-2.5 lg:max-w-full">
          <Image
            src={about?.data.attributes.image.data.attributes.url}
            alt=""
            sizes="(min-width: 1024px) 32rem, 20rem"
            width={500}
            height={500}
            className="aspect-square  rounded-xl bg-zinc-100 object-cover dark:bg-zinc-800"
          />
        </div>
      </div>
      <div className="lg:order-end lg:row-span-2">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {about.data.attributes.Heading}
        </h1>
        <div className="prose mt-6 space-y-7 text-base text-zinc-600 dark:prose-invert dark:text-zinc-400">
          <ReactMarkdown>{about.data.attributes.description}</ReactMarkdown>
        </div>
      </div>
      <div className="lg:pr-20">
        <ul role="list">
          <SocialLink href={about.data.attributes.twitter} icon={Twitter}>
            Follow on Twitter
          </SocialLink>
          <SocialLink
            href={about.data.attributes.instagram}
            icon={Instagram}
            className="mt-4"
          >
            Follow on Instagram
          </SocialLink>
          <SocialLink
            href={about.data.attributes.github}
            icon={Github}
            className="mt-4"
          >
            Follow on GitHub
          </SocialLink>
          <SocialLink
            href={about.data.attributes.linkedin}
            icon={LinkedIn}
            className="mt-4"
          >
            Follow on LinkedIn
          </SocialLink>
          <SocialLink
            href="mailto:asadkomi@outlook.com"
            icon={MailIcon}
            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
          >
            asadkomi@outlook.com
          </SocialLink>
        </ul>
      </div>
    </div>
  )
}
