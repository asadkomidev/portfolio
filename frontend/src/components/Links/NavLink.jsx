import React from 'react'
import Link from 'next/link'

export const NavLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="transition hover:text-blue-500 dark:hover:text-blue-400"
    >
      {children}
    </Link>
  )
}
