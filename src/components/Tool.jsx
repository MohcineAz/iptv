import React from 'react'
import tool1 from '../assets/images/tool 1.png'
import tool2 from '../assets/images/tool 2.png'
import tool3 from '../assets/images/tool 3.png'
import tool4 from '../assets/images/tool 4.png'
import tool5 from '../assets/images/tool 5.png'
function Tool() {
  return (
    <div className='images flex gap-4'>
      <img src={tool1} alt="" />
      <img src={tool2} alt="" />
      <img src={tool3} alt="" />
      <img src={tool4} alt="" />
      <img src={tool5} alt="" />
    </div>
  )
}

export default Tool
