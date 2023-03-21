import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import TrainingSection from '../components/TrainingSection'

const Training = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='Képzés' text="Utazás elötti és utazás közbeni képzések." />
        <TrainingSection />
        <Footer />
    </div>
  )
}

export default Training