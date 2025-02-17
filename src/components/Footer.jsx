import React from "react";
import logo from "../assets/images/logo.png";
import fb from "../assets/images/fb.png";
import insta from "../assets/images/insta.png";
import lnkd from "../assets/images/linkedin.png";
import x from "../assets/images/x.png";
function Footer() {
  return (
    <section id="about" className="bg-[#060E1B] py-12 px-8 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-8">
      <div className="flex flex-col">
        <img src={logo} alt="" className="w-1/2" />
        <p className="text-white text-sm my-3 font-thin">
          At Streamify, we're dedicated to revolutionizing the way you
          experience entertainment. With our cutting-edge IPTV service, we bring
          you a world of streaming possibilities, from live TV channels to
          on-demand content, all delivered in stunning HD, FHD, 4K, and 8K
          resolution. Experience the future of entertainment with Streamify.
        </p>
        <div className="icons flex items-center space-x-2">
          <button className="border-2 border-white rounded-full w-10 h-10 flex items-center justify-center">
            <img src={fb} alt="" />
          </button>
          <button className="border-2 border-white rounded-full w-10 h-10 flex items-center justify-center">
            <img src={insta} alt="" />
          </button>
          <button className="border-2 border-white rounded-full w-10 h-10 flex items-center justify-center">
            <img src={x} alt="" />
          </button>
          <button className="border-2 border-white rounded-full w-10 h-10 flex items-center justify-center">
            <img src={lnkd} alt="" />
          </button>
        </div>
      </div>
      <div className="text-white flex flex-col items-center md:items-start">
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold">About us</h2>
          <a href="" className="text-sm mt-3 font-thin hover:text-[#30FFF3]">
            Our services
          </a>
          <a href="" className="text-sm mt-3 font-thin hover:text-[#30FFF3]">
            Plans and pricing
          </a>
        </div>
      </div>
      <div className="text-white flex flex-col items-center">
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold">Help and support</h2>
          <a href="" className="text-sm mt-3 font-thin hover:text-[#30FFF3]">
            Sign in
          </a>
          <a href="" className="text-sm mt-3 font-thin hover:text-[#30FFF3]">
            Help / Support
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
