import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Priceing from '../components/Pricing'

const Prices = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='Áraink' text="Válassz egy utat." />
        <Priceing />
        <Footer />
    </div>
  )
}

export default Prices