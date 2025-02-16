import React from "react";
import email from "../assets/images/email.png";
import Button from "./Button";
function Newsletter() {
  return (
    <section id="contact" className="py-12 flex flex-col justify-center items-center px-8 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h2 className='text-black font-semibold mb-6 text-3xl'>Subscribe to our newsletter</h2>
      <div className="flex items-center bg-black text-white rounded-full p-2 shadow-lg w-full max-w-lg">
        {/* Icône Email */}
        <img src={email} alt="email" className="h-6 w-6 text-gray-400 ml-3" />
        {/* Champ Input */}
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 px-4"
        />

        {/* Bouton Subscribe */}
        <Button text="Subscribe"  className="bg-white text-black hover:bg-[#30FFF3]"/>
      </div>
    </section>
  );
}

export default Newsletter;
