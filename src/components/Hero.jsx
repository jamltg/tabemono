import React from 'react';
import resto from '../images/resto.jpg'

export default function Hero() {
  return (
    <div className='w-full h-screen relative'>
      {/* Background Image and Overlay */}
      <div>
        <div 
          className='absolute inset-0 w-full' 
          style={{backgroundImage: `url(${resto})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat:'no-repeat'
          }}
        />
        <div className='absolute inset-0 bg-black opacity-60'/>
      </div> 
      {/* Text Content */}
      <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
        <h1 className='text-5xl md:text-8xl tracking-widest font-shikamaru'>TABEMONO</h1>
        <p className='text-2xl md:text-2xl mt-3 tracking-widest'>A taste of tradition</p>
      </div>     
    </div>
  )        
}
