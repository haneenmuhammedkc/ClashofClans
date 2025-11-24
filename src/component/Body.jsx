import React from 'react'
import img from "../assets/Main Bg.webp"
import img1 from "../assets/coc.webp"

function Body() {
  return (
    <div
      className="w-full min-h-[90vh] bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${img})` }}>
      <img className="h-[120px] md:h-[145px] w-auto" src={img1} alt="Clash of Clans Logo"/>
    </div>
  )
}

export default Body