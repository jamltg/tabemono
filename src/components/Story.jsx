import React from 'react';
import resto2 from '../images/resto2.jpg';

export default function Story() {
  return (
    <div className='bg-black py-8'>
      <div className='mx-auto px-8 max-w-[1240px] flex flex-col lg:flex-row'>
        <div className='text-white lg:w-[50%] py-6'>
          <h1 className='text-4xl mb-10 text-center'>Our Story</h1>
          <div>
            <div className='text-center tracking-wide lg:text-left'>
              <p className='mb-4'>
                Welcome to Tabemono, where the vibrant tapestry of Japanese culinary traditions intertwines with 
                the dynamic spirit of Filipino gastronomy. Led by the visionary Executive Chef Jhame Letigio, our 
                journey is one of innovation and homage to the rich heritage of Japanese cuisine.
              </p>
              <p>
                In the heart of the Philippines, Tabemono emerges as a beacon of culinary excellence, offering a fusion 
                of traditional Japanese flavors and daring contemporary creations. With meticulous attention to detail and 
                a passion for pushing boundaries, Chef Letigio invites you to embark on a sensory adventure like no other.
              </p>
            </div>
          </div>
        </div>
        <div className='lg:w-[50%] flex justify-center'>
          <img src={resto2} alt="restaurant" className='h-[500px]'/>
        </div>
      </div>
    </div>
  )
}
