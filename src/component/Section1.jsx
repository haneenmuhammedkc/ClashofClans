import React from "react";
import phoneImg from "../assets/phone.webp";
import amazonBadge from "../assets/amazon.webp";
import appstoreBadge from "../assets/appstore.webp";
import playBadge from "../assets/googleplay.webp";

function Section1() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 py-12 lg:py-20 flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">LEAD YOUR CLAN TO VICTORY!</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">Answer the call of the mustache! Join the international fray that is Clash of Clans and the Clash® universe. Customize your village, build an army and crush your opponents. Like using friendship to strike fear into your enemies? Join a Clan, or establish a Clashing legacy by creating your own. The choice is yours in this millions-strong community of Barbarians. Download for free and Clash on, Chief!</p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <img src={amazonBadge} alt="Amazon" className="h-10 sm:h-12 w-auto max-w-[150px]"/>
            <img src={appstoreBadge} alt="App Store" className="h-10 sm:h-12 w-auto max-w-[150px]"/>
            <img src={playBadge}alt="Google Play"className="h-10 sm:h-12 w-auto max-w-[150px]"/>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="max-w-[420px] w-full">
            <img src={phoneImg} alt="phone" className="w-full h-auto object-contain"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1