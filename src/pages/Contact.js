import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Contact2 from '../components/Contact2'

const Contact = () => {
  return (
    
    <div>
        <Navbar/>
        <HeroImage heading="Lépjen kapcsolatba velünk!" text="Tegye élvezetsebbé űrutazásait egyedi igényeivel..." />
        <Contact2/>
        <Footer/>
    </div>
  )
}

export default Contact