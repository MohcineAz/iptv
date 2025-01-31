import React from 'react'

function Button({ text, onClick, className = "" }) {
  return (
    <button onClick={onClick} className={`rounded-full px-10 py-2  ${className}`}>
      {text}
    </button>
  )
}

export default Button
