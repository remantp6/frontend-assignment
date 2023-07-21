import React from 'react'
import "../assets/css/Button.css"

const Button = ({ onClick, label}) => {
  return (
    <>
    <div className='cart-button'>
      <button onClick={onClick}>{label}</button>
    </div>
    </>
  )
}

export default Button
