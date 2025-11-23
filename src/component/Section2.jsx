import React from 'react'
import img from "../assets/1.webp"
import img1 from "../assets/22.webp"

function Section2() {
  return (
    <>
    <div className='w-full h-[80vh] max-xl:h-[40vh] max-sm:h-[85vh]'>
        <div className='w-full h-[10%] flex justify-center'>
            <h2 className='text-4xl font-bold'>CLASH® NEWS</h2>
        </div>
        <div className='w-full h-[70%] max-xl:h-[55%] max-sm:h-[75%] flex max-sm:flex-col gap-[1%]'>
            <div className='w-[50%] h-[100%] max-sm:w-full'>
                <div className='w-[98%] h-[84%] max-xl:h-[70%]  max-sm:h-[70%] flex md:justify-end'>
                    <img className='w-[585px] h-[316px] max-xl:w-[385px] max-xl:h-[203px] max-sm:pl-[30px]' src={img} alt="" />
                </div>
                <div className='w-[98%] h-[8%] max-xl:h-[7%] flex justify-center'>
                    <p className='text-pink-500 font-bold pl-[130px] max-xl:pl-[85px] max-sm:pl-[0px]'>CLASH OF CLANS</p>
                </div>
                <div className='w-[98%] h-[8%] flex justify-center'>
                    <p className='font-semibold text-xl pl-[130px] max-xl:pl-[85px] max-sm:pl-[0px]'>Summer Jam Is Here! Everything You Need To Know</p>
                </div>
            </div>
            <div className='w-[50%] h-[100%] max-sm:w-full'>
                <div className='w-[98%] h-[84%] max-xl:h-[70%] max-sm:h-[70%]'>
                    <img className='w-[585px] h-[316px] max-xl:w-[385px] max-xl:h-[203px] max-sm:pl-[30px]' src={img1} alt="" />
                </div>
                <div className='w-[98%] h-[8%] max-xl:h-[7%] flex justify-center'>
                    <p className='text-pink-500 font-bold pr-[130px] max-xl:pr-[115px] max-sm:pr-[0px]'>CLASH OF CLANS</p>
                </div>
                <div className='w-[98%] h-[8%] flex justify-center'>
                    <p className='font-semibold text-xl pr-[130px] max-xl:pr-[115px] max-sm:pr-[0px]'>Upcoming Changes to Crafted Defenses</p>
                </div>
            </div>
        </div>
        <div className='w-full h-[20%] max-sm:h-[10%] flex justify-center items-center'>
            <button className='w-[200px] h-[45px] rounded-md bg-blue-500 text-white font-medium'>CLASH OF CLANS NEWS</button>
        </div>
    </div>
    </>
  )
}

export default Section2