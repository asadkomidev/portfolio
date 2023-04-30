import React from 'react'
import { NavItem } from './NavItem.jsx'

export const DesktopNavigation = (props) => {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href="/">Home</NavItem>
        <NavItem href="#work">Work</NavItem>
        <NavItem href="#portfolio">Portfolio</NavItem>
        <NavItem href="#skills">Skills</NavItem>
        <NavItem href="#blog">Blog</NavItem>
      </ul>
    </nav>
  )
}
