import React from 'react'
import logo from '../assets/images/logo.png'
import Button from './Button'
const NavbarMenu = [
    {
        id : 1,
        title : "Home",
        link : "#"
    },
    {
        id : 2,
        title : "Services",
        link : "#"
    },
    {
        id : 3,
        title : "Pricing",
        link : "#"
    },
    {
        id : 4,
        title : "Contact us",
        link : "#"
    },
    {
        id : 5,
        title : "About",
        link : "#"
    },
    
]
function Navbar() {
  return (
    <nav className='flex items-center justify-between'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <ul className='flex items-center justify-between gap-6'>
            {
                NavbarMenu.map((menu) => (
                    <li key={menu.id} className='cursor-pointer'>
                        <a href={menu.link}>{menu.title}</a>
                    </li>
                ))
            }
        </ul>
      </div>
      <div className="try">
        <Button text='Try now'/>
      </div>
    </nav>
  )
}

export default Navbar
