import React from "react";
import newsImg1 from "../assets/1.webp";
import newsImg2 from "../assets/22.webp";

function Section2() {
  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">CLASH® NEWS</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <article className="bg-white shadow-sm rounded-md overflow-hidden">
            <img src={newsImg1} alt="Summer Jam" className="w-full h-56 sm:h-64 md:h-72 object-cover"/>
            <div className="p-4">
              <p className="text-pink-500 font-bold mb-1">CLASH OF CLANS</p>
              <h3 className="text-xl font-semibold"> Summer Jam Is Here! Everything You Need To Know </h3>
            </div>
          </article>
          <article className="bg-white shadow-sm rounded-md overflow-hidden">
            <img src={newsImg2} alt="Crafted Defenses" className="w-full h-56 sm:h-64 md:h-72 object-cover"/>
            <div className="p-4">
              <p className="text-pink-500 font-bold mb-1">CLASH OF CLANS</p>
              <h3 className="text-xl font-semibold"> Upcoming Changes to Crafted Defenses </h3>
            </div>
          </article>
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium"> CLASH OF CLANS NEWS </button>
        </div>
      </div>
    </section>
  );
}

export default Section2