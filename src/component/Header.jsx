import React from 'react'
import img from "../assets/logo.webp"
import img1 from "../assets/pic1.svg"
import img2 from "../assets/pic2.svg"
import img3 from "../assets/pic3.svg"
import img4 from "../assets/icon.jpg"

function Header() {
  return (
    <>
        <div className='w-full h-[40px] sm:h-[50px]  md:h-[78px] flex absolute z-1 justify-center'>
            <div className='w-full h-[78px] md:w-[78%] fixed bg-black flex'>
                <div className='h-full w-[14%] md:w-[10%] flex items-center'>
                    <img className='w-[70px] h-[45px] pl-[14px]' src={img} alt="" />
                </div>
                <div className='h-full w-[43%] flex items-center'>
                    <ul className='text-gray-300 xl:flex column gap-[35px] font-Helvetica, Arial, sans-serif font-semibold hidden'>
                        <li>Games</li>
                        <li>Careers</li>
                        <li>Support</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className='h-full w-[45%] flex items-center justify-end gap-[30px] xl:pr-[30px] pr-[0%]'>
                    <img className='h-[30px] w-[30px] max-xl:hidden' src={img1} alt="" />
                    <img className='h-[30px] w-[30px] max-xl:hidden' src={img2} alt="" />
                    <img className='h-[30px] w-[30px] max-xl:hidden' src={img3} alt="" />
                    <img className='h-[60px] w-[80px] xl:hidden sm:block' src={img4} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Header