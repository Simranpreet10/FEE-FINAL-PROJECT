import React from 'react'
import { Link } from 'react-router-dom'

const Navbar1 = () => {
  return (
    <nav className="bg-gray-800 text-white flex  justify-end px-4 py-2">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-400 ">
            CONTACT & SUPPORT: <span className='text-yellow-500'>+1800 1234 5678</span> |
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-gray-400">
            CONTACT US |
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-gray-400">
            HELP
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar1;