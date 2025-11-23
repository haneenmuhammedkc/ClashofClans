import React from 'react'
import img from "../assets/bg.jpg"
import img1 from "../assets/reddit.webp"
import img2 from "../assets/youtube.webp"
import img3 from "../assets/facebook.webp"
import img4 from "../assets/instagram.webp"
import img5 from "../assets/twitter.webp"
import img6 from "../assets/discord.webp"
import img7 from "../assets/phone2.webp"

function Section3() {
  return (
    <>
    <div style={{backgroundImage:`url(${img})`}} className='w-full h-[80vh] max-xl:h-[35vh] max-sm:h-[80vh] bg-center bg-cover flex'>
        <div className='w-[50%] h-[100%] max-sm:w-[100%] flex max-sm:flex-col lg:items-center lg:justify-end-safe'>
            <div className='w-[80%] max-sm:w-[94%] h-[50%] max-sm:pl-[3%] max-sm:flex max-sm:flex-col max-sm:items-center'>
                <h1 className='text-white font-bold text-4xl max-sm:pt-[20px] '>SEE THE LATEST</h1><br/>
                <p className='text-white text-xl'>To stay on top of your game, keep an eye on the in-game News section. Follow us on social media for the latest chatter and sneak peeks on what the team is working on. Don’t be a stranger and join the conversation.</p><br/>
                <p className='text-white text-sm font-bold'>FOLLOW CLASH OF CLANS ON</p><br/>
                <div className='w-[100%] h-[20%] flex flex-row gap-[20px]'>
                    <img className='w-[28px] h-[23px]' src={img1} alt="" />
                    <img className='w-[28px] h-[23px]' src={img2} alt="" />
                    <img className='w-[28px] h-[23px]' src={img3} alt="" />
                    <img className='w-[28px] h-[23px]' src={img4} alt="" />
                    <img className='w-[28px] h-[23px]' src={img5} alt="" />
                    <img className='w-[28px] h-[23px]' src={img6} alt="" />
                </div>
            </div>
            <div className='w-[100%] h-[100%] flex items-center lg:hidden overflow-hidden'>
            <img className='w-[430px] h-[260px] relative left-[-85px]' src={img7} alt="" />
            </div>
        </div>
        <div className='w-[50%] h-[100%] flex items-center max-lg:hidden overflow-hidden'>
            <img className='w-[922px] h-[430px] max-xl:h-[330px] relative right-[-160px] max-xl:right-[-120px]' src={img7} alt="" />
        </div>
    </div>
    </>
  )
}

export default Section3