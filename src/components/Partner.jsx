import React from "react";
import part1 from "../assets/images/channel 1.png";
import part2 from "../assets/images/channel 2.png";
import part3 from "../assets/images/channel 3.png";
import part4 from "../assets/images/channel 4.png";
import part5 from "../assets/images/channel 5.png";
import part6 from "../assets/images/channel 6.png";
import part7 from "../assets/images/channel 7.png";
import part8 from "../assets/images/channel 8.png";
import part9 from "../assets/images/channel 9.png";
import part10 from "../assets/images/channel 10.png";
const channels = [
  {
    id: 1,
    src: part1,
  },
  {
    id: 2,
    src: part2,
  },
  {
    id: 3,
    src: part3,
  },
  {
    id: 4,
    src: part4,
  },
  {
    id: 5,
    src: part5,
  },
  {
    id: 6,
    src: part6,
  },
  {
    id: 7,
    src: part7,
  },
  {
    id: 8,
    src: part8,
  },
  {
    id: 9,
    src: part9,
  },
  {
    id: 10,
    src: part10,
  },
];
function Partner() {
  return (
    <section className=" py-12 px-8 grid place-items-center bg-[#00050E]">
      {/* bg-gradient-to-r from-[#00050E] from-30% via-[#8000FF] via-100% to-[#AD00FF] to-80% */}
      <div className="grid grid-cols-2 md:grid-cols-6 sm:grid-cols-3 gap-4 justify-items-center items-center space-y-4">
        {channels.map((channel) => (
          <img key={channel.id} src={channel.src} alt="" className="mx-auto" />
        ))}
      </div>
    </section>
  );
}

export default Partner;
