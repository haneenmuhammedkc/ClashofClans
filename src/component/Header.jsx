import React from 'react'
import logo from "../assets/logo.webp"
import icon1 from "../assets/pic1.svg"
import icon2 from "../assets/pic2.svg"
import icon3 from "../assets/pic3.svg"
import menuIcon from "../assets/icon.jpg"

function Header() {
  return (
    <header className="w-full fixed top-0 left-0 h-[78px] bg-black flex justify-center z-[20]">
      <div className="w-full md:w-[78%] h-full flex items-center px-4">
        <div className="w-[25%] flex items-center">
          <img className="w-[70px] h-[45px] object-contain" src={logo} alt="Logo" />
        </div>
        <nav className="hidden xl:flex w-[45%]">
          <ul className="flex gap-10 text-gray-300 font-semibold">
            <li className="hover:text-white cursor-pointer">Games</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Support</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
          </ul>
        </nav>
        <div className="w-[30%] flex items-center justify-end gap-5">
          <img className="h-[28px] w-[28px] max-xl:hidden" src={icon1} alt="" />
          <img className="h-[28px] w-[28px] max-xl:hidden" src={icon2} alt="" />
          <img className="h-[28px] w-[28px] max-xl:hidden" src={icon3} alt="" />
          <img className="h-[45px] w-[55px] xl:hidden" src={menuIcon} alt="Menu" />
        </div>
      </div>
    </header>
  )
}

export default Header
