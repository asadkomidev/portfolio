import React from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'

export const MobileNavItem = ({ href, children }) => {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  )
}
