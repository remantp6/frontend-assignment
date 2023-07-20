import React from 'react'
import "../assets/css/HeroBanner.css"
import banner from "../assets/images/banner.jpg";

const HeroBanner = () => {
  return (
    <>
      <div className="banner-content">
        <div className="hero-banner">
          <img src={banner} alt="banner" />
        </div>
        <div className="banner-caption">
        <h1 className="mb-0">IT'S SHOPPING TIME</h1>
        <h2 className="mb-0 text-center">Buy Online</h2>
      </div>
      </div>
    </>
  )
}

export default HeroBanner
