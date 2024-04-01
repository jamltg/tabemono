import React from 'react';
import sushi from '../images/sushi.jpg';

export default function Book() {
  return (
    <div className="w-full h-[60vh] bg-right-top relative">
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${sushi})` }}></div>
            <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        <div className='relative max-w-[1240px] h-full flex flex-col items-center justify-center text-center mx-auto space-y-14 px-6'>
            <div className='lg:w-full'>
                <h1 className="text-white text-4xl font-raleway font-bold tracking-wider leading-relaxed">Embark on a journey of authentic Japanese flavors with us.</h1>
            </div>
            <div className='w-full'>
                <button className="border-2 text-white rounded-lg px-6 py-2 lg:px-16 lg:py-4 hover:bg-white hover:text-black font-medium">BOOK A TABLE</button>
            </div>
        </div>
    </div>
  )
}
