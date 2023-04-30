import React from 'react'
import clsx from 'clsx'

export const Divider = ({ title, className }) => {
  return (
    <div className={clsx(className, 'relative')}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-zinc-200 dark:border-zinc-700/40" />
      </div>
      <div className="relative flex justify-start">
        <span className="bg-[#FAFAFA] pr-2 text-sm text-gray-500 dark:bg-black">
          {title}
        </span>
      </div>
    </div>
  )
}
