import React from "react";

const service = [
  {
    id: 1,
    image: "/src/assets/images/Earth Globe Europe Africa Emoji.png",
    title: `Worldwide TV channels
From 115 countries`,
    desc: `Explore a world of entertainment with Streamify s extensive selection of TV channels from 115 countries. From local favorites to international hits, there s something for everyone to enjoy. Dive into a global TV experience like never before!`,
  },
  {
    id: 2,
    image: "/src/assets/images/Money with Wings Emoji.png",
    title: `7 days money back
Guarantee`,
    desc: `Explore a world of entertainment with Streamify s extensive selection of TV channels from 115 countries. From local favorites to international hits, there s something for everyone to enjoy. Dive into a global TV experience like never before!`,
  },
  {
    id: 3,
    image: "/src/assets/images/Star Eyes Emoji.png",
    title: `Premium quality
HD/ FHD/ 4K/ 8K`,
    desc: `Explore a world of entertainment with Streamify s extensive selection of TV channels from 115 countries. From local favorites to international hits, there s something for everyone to enjoy. Dive into a global TV experience like never before!`,
  },
];

function Service() {
  return (
    <section className="bg-gradient-to-r from-[#0D1728] from-100% via-[#00050E52] via-30% to-[#0D1728] to-100%">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 place-content-center place-items-center">
        {service.map((service) => (
          <div
            key={service.id}
            className="card  text-white flex flex-wrap justify-center items-center place-items-center max-w-[350px] gap-4 text-center"
          >
            <img src={service.image} alt="" />
            <h3 className="text-xl font-semibold text-center">
              {service.title}
            </h3>
            <p className="text-center">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
