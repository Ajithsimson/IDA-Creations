import React from 'react'
import image from '../../../../assets/gallary/game1.jpg'
import image1 from '../../../../assets/gallary/ai.jpg'
import image2 from '../../../../assets/gallary/3d.jpg'
import image4 from '../../../../assets/gallary/2d.jpg'
import image5 from '../../../../assets/gallary/graphics.jpg'
import image6 from '../../../../assets/gallary/vfx.jpg'
import image7 from '../../../../assets/gallary/VR.jpg'
import image8 from '../../../../assets/gallary/virtual.jpg'
import image9 from '../../../../assets/gallary/CG.jpg'


const Cards = () => {
  return (
    <div className=' md:grid grid-cols-3 items-center gap-3 my-10 '>
    <div className="mb-5 md:mb-0 max-w-sm rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform
     hover:-translate-y-1 hover:shadow-xl cursor-pointer">
        
      <img className="w-[384px] h-[256px]" src={image} alt="Card" />
      
      <div className="px-6 py-4">
        
            <p className='text-center font-bold'>Game Development</p>
        </div>
       </div>
       <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform
     hover:-translate-y-1 hover:shadow-xl cursor-pointer">
        
      <img className="w-[384px] h-[256px]" src={image1} alt="Card" />
      
      <div className="px-6 py-4">
        
            <p className='text-center font-bold'>Generative AI</p>
        </div>
       </div>
       <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform
     hover:-translate-y-1 hover:shadow-xl cursor-pointer">
        
      <img className="w-[384px] h-[256px]" src={image2} alt="Card" />
      
      <div className="px-6 py-4">
        
            <p className='text-center font-bold'>3D Modeling/Rendering</p>
        </div>
       </div>
       <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform
     hover:-translate-y-1 hover:shadow-xl cursor-pointer">
        
      <img className="w-[384px] h-[256px]" src={image4} alt="Card" />
      
      <div className="px-6 py-4">
        
            <p className='text-center font-bold'>2D/3D Animation</p>
        </div>
       </div>
       <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform
     hover:-translate-y-1 hover:shadow-xl cursor-pointer">
        
      <img className="w-[384px] h-[256px]" src={image5} alt="Card" />
      
      <div className="px-6 py-4">
        
            <p className='text-center font-bold'>Motion Graphics</p>
        </div>
       </div>
       <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform
     hover:-translate-y-1 hover:shadow-xl cursor-pointer">
        
      <img className="w-[384px] h-[256px]" src={image6} alt="Card" />
      
      <div className="px-6 py-4">
        
            <p className='text-center font-bold'>VFX</p>
        </div>
       </div>
       <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform
     hover:-translate-y-1 hover:shadow-xl cursor-pointer">
        
      <img className="w-[384px] h-[256px]" src={image7} alt="Card" />
      
      <div className="px-6 py-4">
        
            <p className='text-center font-bold'>AR/VR/MR/XR</p>
        </div>
       </div>
       <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform
     hover:-translate-y-1 hover:shadow-xl cursor-pointer">
        
      <img className="w-[384px] h-[256px]" src={image8} alt="Card" />
      
      <div className="px-6 py-4">
        
            <p className='text-center font-bold'>Virtual Production</p>
        </div>
       </div>
       <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform
     hover:-translate-y-1 hover:shadow-xl cursor-pointer">
        
      <img className="w-[384px] h-[256px]" src={image9} alt="Card" />
      
      <div className="px-6 py-4">
        
            <p className='text-center font-bold'>CG</p>
        </div>
       </div>
       </div>
  )
}

export default Cards
