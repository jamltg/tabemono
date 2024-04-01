import React from 'react';
import wine from '../images/wine.jpg';

export default function WinesTab() {
  return (
    <div className='pb-12'>
      <h2 className='py-6 font-medium'>ENJOY WORLD-CLASS WINES.</h2>
      <div className='flex flex-col lg:flex-row-reverse'>
        <div className='lg:w-[70%] flex justify-center'>
          <img src={wine} alt="wine" className='h-[500px]'/>
        </div>
        <div className='flex flex-col lg:w-[50%] mr-8'>
          <div className='text-5xl font-bold pb-12 pt-8'>
            <h1>An Unrivaled Experience.</h1>
          </div>
          <p>
            Explore our curated Japanese wine selection at Tabemono, carefully chosen to perfectly complement our 
            authentic cuisine. From premium Sake to other Japanese wines, each bottle enhances the flavors of our dishes, 
            whether you're enjoying delicate sushi or robust Izakaya-style plates. Elevate your dining experience with us 
            as you discover the perfect pairing for every bite at Tabemono.
          </p>
          <div className='flex justify-center py-4'>
            <button className='text-white border border-white px-4 py-2 rounded-lg hover:text-black hover:bg-white'>See More</button>
          </div>
        </div>
      </div>
    </div>
  )
}
