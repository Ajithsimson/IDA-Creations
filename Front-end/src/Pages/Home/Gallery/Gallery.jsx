import React from 'react'
import image1 from '../../../assets/gallary/image.png'
import image2 from '../../../assets/gallary/image1.png'
import image3 from '../../../assets/gallary/image3.png'
import image4 from '../../../assets/gallary/image4.png'

const Gallery = () => {
  return (
    <div className='md:w-[100%] mx-auto my-20 text-center bg-gray-200 '>
        <div className='mb-10 '>
            <h1 className='text-5xl font-bold text-s pt-4'>Blog</h1>
        </div>
         {/* image conatainer */}

        <div className='md:grid grid-cols-2 items-center gap-7'>
            <div className='mb-4 md:mb-0'>
                <img src={image1} alt="" className='md:h-[350px] w-full mx-auto rounded-sm' />
                <p className='mt-5 text-secondary font-bold hover:text-black'><u>The Art Of Crafting Exceptional Android Applications: A Developer’s Insight</u></p>
            </div>
            
                <div className='mb-4 md:mb-0'>
                    <img src={image2} alt="" className='md:h-[350px] w-full mx-auto rounded-sm'/>
                    <p className='mt-5 text-secondary font-bold hover:text-black'><u>Elevate Your Business With The Best IOS App Development Company In The UK</u></p>
                </div>

                <div className='mb-4 md:mb-0'>
                    <img src={image3} alt="" className='md:h-[350px] w-full mx-auto rounded-sm'/>
                    <p className='mt-5 text-secondary font-bold hover:text-black'><u>Elevate Your Online Presence With The Best Custom Web Development In UAE By Vespera AI Solutions</u></p>
                </div>

                <div className='mb-4 md:mb-0'>
                    <img src={image4} alt="" className='md:h-[350px] w-full mx-auto rounded-sm '/>
                    <p className='mt-5 text-secondary font-bold hover:text-black'><u>Elevate Your Digital Presence With Vespera AI Solutions: Professional UI/UX Development In The UK</u></p>
                </div>
            </div>
        </div>
      
    
  )
}
 
export default Gallery
