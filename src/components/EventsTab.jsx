import React from 'react';
import events from '../images/events.jpg';

export default function EventsTab() {
  return (
    <div className='pb-12'>
      <h2 className='py-6 font-medium'>PRIVATE EVENTS, A CUT ABOVE THE REST.</h2>
      <div className='flex flex-col lg:flex-row-reverse'>
        <div className='lg:w-[70%]'>
          <img src={events} alt="private dining"/>
        </div>
        <div className='flex flex-col lg:w-[50%] mr-8'>
          <div className='text-5xl font-bold pb-6 pt-4'>
            <h1>Meet.</h1>
            <h1>Celebrate.</h1>
            <h1>Gather.</h1>
          </div>
          <p>
            Led by the visionary Executive Chef Jhame Letigio, our journey is one of innovation and homage to the 
            rich heritage of Japanese cuisine. Within our sanctuary, discover beautiful private spaces and dining 
            rooms designed for intimacy and luxury, offering flexible package options tailored to every occasion. 
            Our top-notch service ensures that every moment with us is extraordinary, complemented by a diverse menu 
            featuring traditional Japanese flavors alongside bold, modern twists.
          </p>
          <div className='flex justify-center py-4'>
            <button className='text-white border border-white px-4 py-2 rounded-lg hover:text-black hover:bg-white'>See More</button>
          </div>
        </div>
      </div>
    </div>
  )
}
