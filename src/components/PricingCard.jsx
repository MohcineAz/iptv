import React from "react";
import Button from "./Button";
import rectangle from "../assets/images/Rectangle.png";
function PricingCard({ id, month, price, free, features }) {
  return (
    <section>
      <div className="min-w-[300px] bg-[#0D1728] text-white rounded-3xl h-full text-center flex flex-col justify-between px-4 border-transparent hover:border-2 hover:border-[#30FFF3] transition-all duration-300 hover:bg-[#00050E] group relative">
        {id === 2 && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            {" "}
            <h3 className="absolute  left-1/2 transform -translate-x-1/2 text-black">
              Popular
            </h3>{" "}
            <img src={rectangle} alt="" />
          </div>
        )}
        <h3 className="text-xs py-2 pt-6">{month}</h3>
        <p className="font-bold text-4xl py-2">{price}</p>
        <h3 className="text-xs py-2">{free}</h3>
        <ul className="flex flex-col grow py-3 border-gray-400 border-b-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex-1 flex items-center justify-center py-3 border-gray-400 border-b-2 last:border-none"
            >
              {feature}
            </li>
          ))}
        </ul>
        <div className="py-6 ">
          <Button
            className="bg-white text-black group-hover:bg-[#30FFF3]"
            text="Subscribe"
          />
        </div>
      </div>
    </section>
  );
}

export default PricingCard;
