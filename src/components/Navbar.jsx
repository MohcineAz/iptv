import React, { useState, useEffect  } from 'react'
import logo from '../assets/images/logo.png'
import Button from './Button'
const NavbarMenu = [
    {
        id : 1,
        title : "Home",
        link : "#home"
    },
    {
        id : 2,
        title : "Services",
        link : "#services"
    },
    {
        id : 3,
        title : "Pricing",
        link : "#pricing"
    },
    {
        id : 4,
        title : "Contact us",
        link : "#contact"
    },
    {
        id : 5,
        title : "About",
        link : "#about"
    },
    
]
function Navbar() {
  const [active , setActive] = useState('Home');
  const handleClick = (title, link) =>{
    setActive(title);
    document.querySelector(link).scrollIntoView({behavior: 'smooth'});
  }
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(entry => entry.isIntersecting);
      if (visibleSection) {
        const sectionId = visibleSection.target.id;
        const activeItem = NavbarMenu.find(menu => menu.link === `#${sectionId}`);
        if (activeItem) {
          setActive(activeItem.title);
        }
      }
    }, { threshold: 0.6 }); // Se déclenche quand 60% de la section est visible

    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);
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
            <a
              href={menu.link}
              onClick={(e) => {
                e.preventDefault();
                handleClick(menu.title, menu.link);
              }}
              className={`text-white hover:text-[#60EFFE] inline-block py-2 px-3 relative group ${
                active === menu.title ? "text-[#60EFFE]" : ""
              }`}
            >
              {menu.title}
              <div className={`w-6 h-1 bg-[#60EFFE] mt-4 rounded-full left-1/2 -translate-x-1/2 absolute ${active === menu.title ? "block" : "hidden"} `}></div>
            </a>
          </li>
                ))
            }
        </ul>
      </div>
      <div className="try">
        <Button className='bg-gradient-to-r from-[#0061FF] from-10% via-[#30FFF3] via-100% to-[#60EFFF] to-100% text-white' text='Try now'/>
      </div>
    </nav>
  )
}

export default Navbar
