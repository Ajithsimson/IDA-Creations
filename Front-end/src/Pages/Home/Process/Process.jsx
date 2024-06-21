
import React from 'react';
import image1 from '../../../assets/gallary/discuss.jpg'
import image2 from '../../../assets/gallary/idea.jpg'
import image3 from '../../../assets/gallary/execute.jpg'


const Card = () => {
  return (
    <div className="md:grid grid-cols-3 gap-5 my-12 w-full bg-gray shadow-lg rounded- overflow-hidden">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
            <img src={image1} alt="" />
            <h1 className='text-center'>Strategix</h1>
        </div>
        <p className="text-gray-900 text-center">
        Under the client's business,goals and challenges for building relationship.
        </p>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
            <img src={image2} alt="" />
            <h1 className='text-center'>Ideate</h1>
        </div>
        <p className="text-gray-900 text-center">
        Gather ideas and create the first concept for the future product.
        </p>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
            <img src={image3} alt="" />
            <h1 className='text-center'>Implementation</h1>
        </div>
        <p className="text-gray-900 text-center">
        Provide the first draft of a project,accept minor and major revisions.
        </p>
      </div>
     </div>
  );
};

export default Card;
