import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import Button from './Button'
import NavLinks from './NavLinks'
const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-indigo-100">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link to="/">
            <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          </Link>

          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          {/* <li>
            <Link to="/course" className="py-7 px-3 inline-block">
              Course
            </Link>
          </li> */}
          <li>
            {/* <a className="py-7 px-3 inline-block" href="#about">
              About
            </a> */}
            {/* <Link to="#about" className="py-7 px-3 inline-block">
              About
            </Link> */}
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-gray-150 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? 'left-0' : 'left-[-100%]'}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <a className="py-7 px-3 inline-block" href="#about">
              About
            </a>
          </li>
          <NavLinks />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
