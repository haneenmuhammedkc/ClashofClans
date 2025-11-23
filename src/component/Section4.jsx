import React from 'react'
import img from "../assets/y1.webp"
import img1 from "../assets/y2.webp"
import img2 from "../assets/you.webp"

function Section4() {
  return (
    <>
    <div className='w-full h-[100vh] max-xl:h-[38vh] max-sm:h-[50vh] flex pt-[100px] max-sm:pt-[50px] gap-[2%]'>
        <div className='w-[48%] h-[100%] max-sm:hidden'>
            <div className='w-[100%] h-[53%] flex justify-end-safe'>
                <img className='w-[580px] h-[330px] max-xl:w-[380px] max-xl:h-[220px]' src={img} alt="" />
            </div>
            <div className='w-[100%] h-[20%] flex justify-end-safe'>
                <div className='w-[580px] h-[100px] max-xl:w-[380px] flex shadow-md'>
                    <div className='w-[50%] h-[100%] flex items-center pl-[50px] max-xl:[10px]'>
                        <p className='text-blue-500 font-medium'>The Great Goblin Heist</p>
                    </div>
                    <div className='w-[50%] h-[100%] flex items-center justify-end pr-[50px]'>
                        <img className='w-[100px] h-[23px]' src={img2} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[48%] h-[100%] max-sm:w-[100%] max-sm:pl-[25px]'>
            <div className='w-[100%] h-[53%]'>
                <img className='w-[580px] h-[330px] max-xl:w-[380px] max-xl:h-[220px]' src={img1} alt="" />
            </div>
            <div className='w-[100%] h-[20%] flex'>
                <div className='w-[580px] h-[100px] max-xl:w-[380px] flex shadow-md'>
                    <div className='w-[50%] h-[100%] flex items-center pl-[50px] max-sm:pl-[10px]'>
                        <p className='text-blue-500 font-medium'>The Tale of The Goblin Wizard</p>
                    </div>
                    <div className='w-[50%] h-[100%] flex items-center justify-end pr-[50px]'>
                        <img className='w-[100px] h-[23px]' src={img2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Section4