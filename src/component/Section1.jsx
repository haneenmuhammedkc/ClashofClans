import React from 'react'
import img from "../assets/phone.webp"
import img1 from "../assets/amazon.webp"
import img2 from "../assets/appstore.webp"
import img3 from "../assets/googleplay.webp"

function Section1() {
  return (
    <>
    <div className='w-full h-auto max-xl:h-[40vh] max-sm:h-auto flex items-center  overflow-hidden'>
        <div className='w-[50%] h-[75vh] max-xl:h-[30vh] max-sm:h-[55vh] max-lg:pt-[50px] max-md:hidden'>
            <img className='w-[950px] h-[350px] xl:h-[450px] absolute lg:left-[-510px] xl:left-[-280px]' src={img} alt="" />
        </div>
        <div className='w-[45%] h-[80vh] max-xl:h-[35vh] max-sm:h-auto max-sm:w-[100%] xl:pt-[100px] overflow-hidden'>
            <div className='w-[100%] h-[50%] max-sm:h-[45vh] max-xl:h-[35%]'>
            <h2 className='text-4xl font-bold font-Helvetica, Arial, sans-serif p-[10px]'>LEAD YOUR CLAN TO VICTORY!</h2>
            <p className='text-xl font-normal p-[10px] max-sm:p-[20px]'>Answer the call of the mustache! Join the international fray that is Clash of Clans and the Clash® universe. Customize your village, build an army and crush your opponents. Like using friendship to strike fear into your enemies? Join a Clan, or establish a Clashing legacy by creating your own. The choice is yours in this millions-strong community of Barbarians. Download for free and Clash on, Chief!</p>
            </div>
            <div className='w-[100%] h-[10%] flex'>
                <div className='w-[42%] h-[100%] flex flex-row gap-[10px] max-sm:pl-[20px] lg:pt-[210px] xl:pt-[50px] '>
                <img className='h-[40px] w-[100px] lg:h-[50px]w-[150px]' src={img1} alt="" />
                <img className='h-[40px] w-[100px] lg:h-[50px]w-[150px]' src={img2} alt="" />
                <img className='h-[40px] w-[100px] lg:h-[50px]w-[150px]' src={img3} alt="" />
                </div>
            </div>
            <div className='w-full max-sm:h-[40vh] flex items-center'>
              <img className='w-[430px] h-[250px] relative max-sm:right-[-30px] md:hidden' src={img} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Section1