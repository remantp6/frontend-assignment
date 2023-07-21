import React from 'react'
import "../assets/css/Button.css"

const Button = ({label}) => {
  return (
    <>
    <div className='cart-button'>
      <button>{label}</button>
    </div>
    </>
  )
}

export default Button
