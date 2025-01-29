import React from 'react'
import Navbar from './Navbar'
import Button from './Button'
import Tool from './Tool'
import hero from '../assets/images/hero.png'
import RoundBtn from './RoundBtn'
import yt from '../assets/images/youtube.png'
import fb from '../assets/images/fb.png'
function Hero() {
  return (
    <section className='bg-[#00050E] overflow-hidden relative px-8 py-8'>
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand info */}
            <div className='flex flex-col justify-center py-14 md:py-0 relative z-20 space-y-10'>
                <h1 className='text-white text-5xl font-extrabold'>Streamify: Elevate Your 
                Entertainment Experience</h1>
                <p className='text-white'>Welcome to Streamify – your gateway to limitless entertainment. With our cutting-edge IPTV service, enjoy live TV channels and on-demand content for an unparalleled streaming experience. Elevate your entertainment journey with Streamify today!</p>
                <div className="group-btn flex items-center gap-4">
                    <Button text='Try now'/>
                    <RoundBtn image={yt} />
                </div>
                <div className="images">
                    <Tool />
                </div>
            </div>
        {/* Hero image */}
        <div className="hero flex items-center">
            <img className='absolute right-0' src={hero} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero
