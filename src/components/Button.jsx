import React from 'react'

function Button({ text, onClick, className = "" }) {
  return (
    <button onClick={onClick} className={`rounded-full px-10 py-2 bg-gradient-to-r from-[#0061FF] from-10% via-[#30FFF3] via-100% to-[#60EFFF] to-100% ${className}`}>
      {text}
    </button>
  )
}

export default Button
