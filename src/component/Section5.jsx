import React from "react";
import youtube from "../assets/youtube.webp";
import facebook from "../assets/facebook.webp";
import instagram from "../assets/instagram.webp";
import twitter from "../assets/twitter.webp";
import linkedin from "../assets/linkedin.webp";
import door from "../assets/door.webp";
import googleplay from "../assets/googleplay.webp";
import appstore from "../assets/appstore.webp";
import logo from "../assets/logo.webp";
import mascot from "../assets/robo.webp";

function Section5() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-blue-600 rounded-md p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold"> INTERESTED IN WORKING WITH US? </h3>
            <p className="mt-2 hidden sm:block"> See our open positions and join the team. </p>
          </div>
          <div className="flex items-center gap-6">
            <button className="px-5 py-3 bg-white text-black rounded-md font-medium"> SEE ALL POSITIONS </button>
            <img src={mascot} alt="mascot" className="w-28 h-auto" />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-sm font-semibold mb-3"> Follow us on </p>
            <div className="flex gap-3 items-center">
              <img src={youtube} alt="youtube" className="w-7 h-7" />
              <img src={facebook} alt="facebook" className="w-7 h-7" />
              <img src={instagram} alt="instagram" className="w-7 h-7" />
              <img src={twitter} alt="twitter" className="w-7 h-7" />
              <img src={linkedin} alt="linkedin" className="w-7 h-7" />
              <img src={door} alt="door" className="w-7 h-7" />
            </div>
            <div className="mt-4 flex gap-3">
              <img src={googleplay} alt="google play" className="w-36 h-auto" />
              <img src={appstore} alt="app store" className="w-36 h-auto" />
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap gap-4 text-sm">
              <p className="text-white/90"> Terms of Service </p>
              <p className="text-white/90"> Privacy Policy </p>
              <p className="text-white/90"> Parent's Guide </p>
              <p className="text-white/90"> Safe and Fair Play Policy </p>
              <p className="text-white/90"> Accessibility Statement </p>
              <p className="text-white/90"> Other Legal Docs </p>
              <p className="text-white/90"> Media Center </p>
              <p className="text-white/90"> Our Domains </p>
              <p className="text-white/90"> Manage Cookies </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-sm text-gray-400">
                <p> Supercell Oy </p>
                <p> Jätkäsaarenlaituri 1 </p>
                <p> 00180 Helsinki </p>
                <p> Finland </p>
              </div>
              <img src={logo} alt="logo" className="w-14 h-auto" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Section5