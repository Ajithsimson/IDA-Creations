import React from 'react'
import HeroContainer from './Hero/HeroContainer'
import Gallery from './Gallery/Gallery'
import PopularServices from './Popular Services/PopularServices'
import Cards from './Popular Services/Cards/Cards'
import Virtual from './Virtual/Virtual'
import Process from './Process/Process'
import Ourwork from './Process/Ourwork'
import Footer from '../../Components/Footer'

const Home = () => {
  return (
    <section>
      <HeroContainer/>
      <div className='max-w-screen-xl mx-auto'>
      <Gallery/>
      <PopularServices/>
      <Cards/>
      <Virtual/>
      <Ourwork/>
      <Process/>
      <Footer/>

      </div>
      </section>
  )
}

export default Home
