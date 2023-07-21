import React from 'react'
import NavBar from '../components/NavBar'
import HeroBanner from '../components/HeroBanner'
import AllProducts from '../components/AllProducts'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <NavBar/>
      <HeroBanner/>
      <AllProducts/>
      <Footer/>
    </>
  )
}

export default Home
