import React from 'react'
import img from "../assets/youtube.webp"
import img1 from "../assets/facebook.webp"
import img2 from "../assets/instagram.webp"
import img3 from "../assets/twitter.webp"
import img4 from "../assets/linkedin.webp"
import img5 from "../assets/door.webp"
import img6 from "../assets/googleplay.webp"
import img7 from "../assets/appstore.webp"
import img8 from "../assets/logo.webp"
import img9 from "../assets/robo.webp"


function Section5() {
  return (
    <>
    <div className='w-full h-[90vh] max-xl:h-[60vh] max-sm:h-[120vh]'>
        <div className='w-[100%] h-[30%] max-xl:h-[50%] flex max-xl:flex-col bg-blue-500'>
            <div className='w-[50%] h-[100%] max-xl:w-[100%] max-xl:h-[50%] flex justify-center items-center flex-col gap-[10px] max-sm:pl-[20px]'>
                <h2 className='text-white text-3xl font-bold'>INTERESTED IN WORKING WITH US?</h2>
                <button className='w-[200px] h-[45px] rounded-md bg-white text-black font-medium'>SEE ALL POSITIONS</button>
            </div>
            <div className='w-[50%] h-[100%] max-xl:w-[100%] max-xl:h-[50%] flex justify-center relative xl:top-[-52px] max-sm:bottom-[-75px]'>
              <img className='w-[250px] h-[250px] max-xl:w-[194px] max-xl:h-[205px]' src={img9} alt="" />
            </div>
        </div>
        <div className='w-[100%] h-[70%] max-xl:h-[50%] bg-black'>
            <div className='w-[100%] h-[30%] flex max-sm:flex-col'>
              <div className='w-[35%] h-[100%] max-sm:w-[100%] max-sm:pl-[20px] max-sm:pt-[10px]'>
                  <div className='w-[65%] h-[50%] md:flex md:items-end md:justify-center'>
                    <p className='text-white font-semibold text-sm'>Follow us on</p>
                  </div>
                  <div className='w-[100%] h-[50%] flex md:justify-center md:items-center gap-[20px]'>
                    <img className='w-[27px] h-[23px]' src={img} alt="" />
                    <img className='w-[27px] h-[23px]' src={img1} alt="" />
                    <img className='w-[27px] h-[23px]' src={img2} alt="" />
                    <img className='w-[27px] h-[23px]' src={img3} alt="" />
                    <img className='w-[27px] h-[23px]' src={img4} alt="" />
                    <img className='w-[27px] h-[23px]' src={img5} alt="" />
                  </div>
              </div>
              <div className='w-[55%] h-[100%] flex md:justify-end items-center gap-[20px] max-sm:pl-[20px]'>
                <img className='w-[150px] h-[50px]' src={img6} alt="" />
                <img className='w-[150px] h-[50px]' src={img7} alt="" />
              </div>
            </div>
            <div className='w-[100%] max-xl:w-[94%] h-[20%] max-sm:h-[55%] flex max-sm:flex-col md:items-center gap-[20px] pl-[135px] max-xl:pl-[74px] max-sm:pl-[20px] max-xl:gap-[0px] max-sm:gap-[15px]'>
              <p className='text-white font-semibold text-sm'>Terms of Service</p>
              <p className='text-white font-semibold text-sm'>Privacy Policy</p>
              <p className='text-white font-semibold text-sm'>Parent's Guide</p>
              <p className='text-white font-semibold text-sm'>Safe and Fair Play Policy</p>
              <p className='text-white font-semibold text-sm'>Accessibility Statement</p>
              <p className='text-white font-semibold text-sm'>Other Legal Docs</p>
              <p className='text-white font-semibold text-sm'>Media Center</p>
              <p className='text-white font-semibold text-sm'>Our Domains</p>
              <p className='text-white font-semibold text-sm'>Manage Cookies</p>
            </div>
            <div className='w-[100%] h-[20%] flex'>
              <div className='w-[50%] h-[100%] pl-[135px] max-xl:pl-[74px] max-sm:pl-[20px]'>
                <p className='text-gray-400 font-semibold text-sm'>Supercell Oy</p>
                <p className='text-gray-400 font-semibold text-sm'>Jätkäsaarenlaituri 1</p>
                <p className='text-gray-400 font-semibold text-sm'>00180 Helsinki</p>
                <p className='text-gray-400 font-semibold text-sm'>Finland</p>
              </div>
              <div className='w-[50%] h-[100%] flex justify-end pr-[100px] max-sm:pr-[15px] max-sm:pt-[20px]'>
                <img className='w-[54px] h-[44px]' src={img8} alt="" />
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Section5