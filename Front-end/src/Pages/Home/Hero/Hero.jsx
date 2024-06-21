import React from 'react'
import bgImg from '../../../../src/assets/home/banner1.jpg'

const Hero = () => {
  return (
    <div className='min-h-screen bg-cover ' style={{backgroundImage: `url('${bgImg} ')`}}>
      <div className='min-h-screen flex justify-start items-center pl-11 text-white bg-black bg-opacity-60'>
        <div>
        <div className='space-y-4 '>
          <p className='md:text-4xl text-2xl  '>We Provide</p>
          <h1 className='md:text-7xl text-4xl font-bold'>Transforming Concepts into Digital Success</h1>
          <div>
            <p className='md:w-1/2'>we specialize in transforming innovative concepts into digital success stories. Our dedicated team of web development experts works tirelessly to bring your vision to life, crafting bespoke websites that not only reflect your
               brand’s essence but also resonate with your target audience</p>
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

export default Hero
