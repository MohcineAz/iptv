import React from 'react'
import Button from './Button'

function PricingCard({month, price, free, features}) {
  return (
    <section>
      <div className='min-w-[300px] bg-[#0D1728] text-white rounded-3xl h-full text-center flex flex-col justify-between px-4 border-transparent hover:border-2 hover:border-[#30FFF3] transition-all duration-300 hover:bg-[#00050E] group'>
       <h3 className='text-sm py-3'>{month}</h3>
       <p className='font-semibold text-2xl py-3'>{price}</p>
       <h3 className='text-sm py-3'>{free}</h3>
       <ul className='flex flex-col grow py-3 border-gray-400 border-b-2'>
        {
          features.map((feature, index) =>
            <li key={index} className='flex-1 flex items-center justify-center py-3 border-gray-400 border-b-2 last:border-none'>{feature}</li>
          )
        }
       </ul>
       <div className='py-6 '>
          <Button className='bg-white text-black group-hover:bg-[#30FFF3]' text='Subscribe'/>
       </div>
      
      </div>
    </section>
  )
}

export default PricingCard
