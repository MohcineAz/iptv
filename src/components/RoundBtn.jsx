import React from 'react'

function RoundBtn({image}) {
  return (
      <button className='border-2 border-white rounded-full w-10 h-10 flex items-center justify-center'>
        {image}
      </button>
  )
}

export default RoundBtn
