import { useState } from 'react'
import './style.css'
import Header from './components/Header'
import SectionOne from './components/Section1'
import SectionTwo from './components/Section2'
import SectionThree from './components/Section3'
import SectionFour from './components/Section4'
import SectionFive from './components/Section5'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </div>
  )
}

export default App
