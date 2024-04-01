import React from 'react';
import resto2 from '../images/resto2.jpg';

export default function AboutContent() {
  return (
    <div className='bg-black w-full h-auto text-white lg:h-screen' id="about">
      <div className='max-w-[1240px] mx-auto flex flex-col items-center lg:h-full lg:flex lg:flex-row lg:items-center lg:space-x-8 px-8'>
        <div className='w-full lg:w-1/2'>
          <img src={resto2} alt="restaurant" className='object-contain w-auto h-auto'/>
        </div>
        <div className='lg:w-[80%] text-justify tracking-wider'>
          <h1 className='font-shikamaru text-7xl text-center py-6'>ABOUT US</h1>
          <p className='mb-4'>
            Welcome to Tabemono, a delightful venture born from the passionate minds of veteran food enthusiasts and 
            savvy business operators with a rich history spanning over two decades in the industry. At Tabemono, our mission 
            is to offer an unforgettable dining experience that transcends the ordinary, by bringing the essence of authentic 
            Japanese cuisine to the heart of the Philippines.
          </p> 
          <p className='mb-4'>
            Our journey is one of culinary exploration, embracing the rich traditions of Japanese cooking while infusing them 
            with local flavors to create a unique dining destination. Whether nestled in the bustling streets of the city or 
            making a surprise appearance in your favorite local spots, Tabemono is dedicated to making each visit a memorable 
            journey into the heart of Japan’s culinary artistry.
          </p>         
        </div>
      </div>
    </div>
  )
}
