import React from "react";
import PricingCard from "./PricingCard";
const pricingData = [
  {
      id: 1,
      month : '12 months',
      price: '$59.99',
      free : '(+1 month free)',
      features : ['HD / FHD / 4K / 8K IPTV','+15 000 Live Channels','+20 000 Movies','+4 000 TV shows','2 simultaneous Connections']
  },
  {
    id: 2,
    month : '6 months',
    price: '$29.99',
    free : '(+1 month free)',
    features : ['HD / FHD / 4K / 8K IPTV','+15 000 Live Channels','+20 000 Movies','+4 000 TV shows','2 simultaneous Connections']
  },
  {
    id: 3,
    month : '3 months',
    price: '$14.99',
    free : '(+1 month free)',
    features : ['HD / FHD / 4K / 8K IPTV','+15 000 Live Channels','+20 000 Movies','+4 000 TV shows','2 simultaneous Connections']
  },
  {
    id: 4,
    month : '1 month',
    price: '$9.99',
    free : '(+1 month free)',
    features : ['HD / FHD / 4K / 8K IPTV','+15 000 Live Channels','+20 000 Movies','+4 000 TV shows','2 simultaneous Connections']
  }
]
function Pricing() {
  return (
    <section id="pricing" className="bg-[#00050E] py-12 px-8">
      <div className="title text-white text-center text-2xl">
        Choose your plan
      </div>
      <div className="py-12 grid gap-4 grid-cols-4 place-content-center place-items-center items-stretch relative">
        {
          pricingData.map((plan, index) =>
            <PricingCard key={index} {...plan} />
          )
        }
      </div>
    </section>
  );
}

export default Pricing;
