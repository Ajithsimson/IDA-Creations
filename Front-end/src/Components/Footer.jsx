import React from 'react'
import ItemContainer from './ItemContainer'
import SocialIcons from './SocialIcons'
import { Icons } from './Menus'

const Footer = () => {
  return (
    <footer className='w-full bg-gray-900 text-white my-12'>
    <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7'>
      <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
      md:w-2/5 '><span className='text-secondary '>Free  </span>Until You're Ready to Launch </h1>
      <div>
        <input type='text' placeholder='Enter your mail' className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5
        rounded px-2 focus-outline-none '/> 
        <button className='bg-gray-600 hover:bg-secondary duration-300 px-5 py-2.5 font-bold
        rounded-md text-white md:w-auto w-full '>Request code</button>
      </div>
    </div>
    <ItemContainer/>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
    text-center pt-2 text-gray-400 text-sm pb-8 '>
      <span>© IDA Creations.All rights reserved 2024</span>
      <span>Terms. Privacy Policy</span>
<SocialIcons Icons={Icons}/>
    </div>
    </footer>
  )
}

export default Footer
