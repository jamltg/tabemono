import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black w-full h-auto'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='grid lg:grid-cols-3 text-white items-center place-content-evenly text-center py-10'>
          <h1 className='font-shikamaru text-5xl'>Tabemono</h1>
          <div className='space-y-4 pt-10'>
            <p>General Santos City, Mindanao</p>
            <p>Philipines</p>
            <p>+639 1234 56789</p>
          </div>
          <div className='space-y-4 pt-10'>
            <h1 className='font-bold'>OPENING HOURS</h1>
            <p>MON-FRI: 8:00 AM - 10:00 PM</p>
            <p>SAT-SUN: 9:00 AM - 11:30 AM</p>
          </div>
        </div>
      </div>
    </div>
  )
}
