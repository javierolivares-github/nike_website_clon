import React from 'react'

const Button = ({ text }) => {
  return (
    <button className='w-full py-4 rounded-full bg-black text-white text-base md:text-lg 
    font-semibold transition-transform active:scale-95 mb-3 hover:opacity-75'>
      {text}
    </button>
  )
}

export default Button