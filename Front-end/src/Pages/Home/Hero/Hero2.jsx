import React from 'react'
import bgImg from '../../../assets/home/banner2.jpg'

const Hero2 = () => {
  return (
    <div className='min-h-screen bg-cover ' style={{backgroundImage: `url('${bgImg} ')`}}>
    <div className='min-h-screen flex justify-start items-center pl-11 text-white bg-black bg-opacity-60'>
      <div>
      <div className='space-y-4 '>
        <p className='md:text-4xl text-2xl  '>We Are Bringing</p>
        <h1 className='md:text-7xl text-4xl font-bold'>Elevating Ideas into Digital Triumphs</h1>
        <div>
          <p className='md:w-1/2'>Our expert team collaborates closely with you to understand your vision and goals, crafting bespoke websites and applications that not only meet but exceed expectations. From intuitive user experiences to robust backend systems, 
          we harness the latest technologies and industry best practices to ensure your digital presence stands out</p>
        </div>
        <div className='flex flex-wrap items-center gap-5 '>
          <button className='px-7 py-3 rounded-lg bg-secondary font-bold '>Join Now</button>
          <button className='px-7 py-3 rounded-lg border hover:bg-secondary font-bold'>Explore </button>
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Hero2
