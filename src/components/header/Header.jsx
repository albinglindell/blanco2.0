import React from 'react'
import logo from "../../assets/logos/text-logo.jpg"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        <Link  className='link' to={"/"}>
        <img lazy src={logo} alt='logo' className='text-logo' />
        </Link>
    </header>
  )
}

export default Header