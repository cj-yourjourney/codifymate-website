import React from 'react'
import Link from 'next/link'

import { LOGO_100_URL } from '../constants'

const Navbar = () => {
  return (
    <nav
      className="navbar bg-base-100 px-4 md:px-8"
      aria-label="Main Navigation"
    >
      <div className="navbar-start">
        <div className="flex items-center gap-2">
          <img
            className="rounded-full w-10 h-10"
            src={LOGO_100_URL}
            alt="Logo"
          />
          <Link href="/" className="text-xl font-bold font-primary">
            CodifyMate
          </Link>
        </div>
      </div>

      <div className="navbar-center">
        <div className="flex gap-2">
          <Link href="/about" className="btn btn-ghost font-primary">
            About
          </Link>

          <Link href="/download" className="btn btn-ghost font-primary">
            Download
          </Link>

          <Link href="/contact" className="btn btn-ghost font-primary">
            Contact
          </Link>
        </div>
      </div>

      <div className="navbar-end"></div>
    </nav>
  )
}

export default Navbar
