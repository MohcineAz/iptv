import React from 'react'
import Navbar from './Navbar'
import Button from './Button'
import Tool from './Tool'
import hero from '../assets/images/hero.png'
import yt from '../assets/images/youtube.png'
import bg1 from '../assets/images/bg1.png'
import bg2 from '../assets/images/bg2.png'

function Hero() {
  return (
    // bg-gradient-to-r from-[#00050E] from-30% via-[#8000FF] via-100% to-[#AD00FF] to-80% overflow-hidden
    <section id='home' className='bg-[#00050E]  relative px-8 py-8'>
      <img src={bg1} className='absolute -top-3 -left-2' alt="" />
      <img src={bg2} className='absolute bottom-0 right-0 lg:w-[300px]' alt="" />
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand info */}
            <div className='flex flex-col justify-center py-14 md:py-0 relative z-20 space-y-10'>
                <h1 className='text-white text-5xl font-extrabold'>Streamify: Elevate Your 
                Entertainment Experience</h1>
                <p className='text-white font-thin'>Welcome to Streamify – your gateway to limitless entertainment. With our cutting-edge IPTV service, enjoy live TV channels and on-demand content for an unparalleled streaming experience. Elevate your entertainment journey with Streamify today!</p>
                <div className="group-btn flex items-center gap-4">
                    <Button className='bg-gradient-to-r from-[#0061FF] from-10% via-[#30FFF3] via-100% to-[#60EFFF] to-100% text-white' text='Try now'/>
                    <button className='border-2 border-white rounded-full w-10 h-10 flex items-center justify-center'>
                      <img src={yt} alt="" />
                    </button>
                    {/* <RoundBtn src={fb} /> */}
                </div>
                <div className="images">
                    <Tool />
                </div>
            </div>
        {/* Hero image */}
        <div className="hero flex items-center lg:block sm:hidden">
            <img className='absolute right-0 lg:block sm:hidden' src={hero} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero
