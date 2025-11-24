import React from "react";
import bg from "../assets/bg.jpg";
import reddit from "../assets/reddit.webp";
import youtube from "../assets/youtube.webp";
import facebook from "../assets/facebook.webp";
import instagram from "../assets/instagram.webp";
import twitter from "../assets/twitter.webp";
import discord from "../assets/discord.webp";
import phoneImg from "../assets/phone2.webp";

function Section3() {
  return (
    <section className="w-full bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4"> SEE THE LATEST </h3>
            <p className="text-base lg:text-lg mb-4"> To stay on top of your game, keep an eye on the in-game News section. Follow us on social media for the latest chatter and sneak peeks on what the team is working on. Don’t be a stranger and join the conversation. </p>
            <p className="font-semibold mb-3"> FOLLOW CLASH OF CLANS ON </p>
            <div className="flex flex-wrap gap-4">
              <img src={reddit} alt="reddit" className="w-7 h-7" />
              <img src={youtube} alt="youtube" className="w-7 h-7" />
              <img src={facebook} alt="facebook" className="w-7 h-7" />
              <img src={instagram} alt="instagram" className="w-7 h-7" />
              <img src={twitter} alt="twitter" className="w-7 h-7" />
              <img src={discord} alt="discord" className="w-7 h-7" />
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="max-w-[520px] w-full">
              <img src={phoneImg} alt="phone showcase" className="w-full h-auto object-contain"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3