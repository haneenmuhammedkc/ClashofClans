import React from 'react'
import img from "../assets/Main Bg.webp"
import img1 from "../assets/coc.webp"

function Body() {
  return (
    <>
    <div style={{backgroundImage:`url(${img})`}} className='w-full h-[50vh] lg:h-[35vh] xl:h-[87vh] bg-center bg-cover flex justify-center items-center-safe'>
        <img className='h-[110px] md:h-[130px] w-[285px] md:w-[305px]' src={img1} alt="" />
    </div>
    </>
  )
}

export default Body