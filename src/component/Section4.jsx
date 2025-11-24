import React from "react";
import card1 from "../assets/y1.webp";
import card2 from "../assets/y2.webp";
import watchBadge from "../assets/you.webp";

function Section4() {
  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-md shadow">
              <img src={card1} alt="The Great Goblin Heist" className="w-full h-64 object-cover"/>
            </div>
            <div className="flex items-center justify-between bg-white shadow p-4 rounded-md">
              <p className="text-blue-500 font-medium"> The Great Goblin Heist </p>
              <img src={watchBadge} alt="watch on" className="w-24 h-auto" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="overflow-hidden rounded-md shadow">
              <img src={card2} alt="The Tale of The Goblin Wizard" className="w-full h-64 object-cover"/>
            </div>
            <div className="flex items-center justify-between bg-white shadow p-4 rounded-md">
              <p className="text-blue-500 font-medium"> The Tale of The Goblin Wizard </p>
              <img src={watchBadge} alt="watch on" className="w-24 h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4