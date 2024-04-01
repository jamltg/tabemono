import React from 'react';
import chef from '../images/chef.jpg';

export default function ChefHighlight() {
  return (
    <div className='relative flex flex-col lg:flex-row lg:items-center lg:justify-center'>
      <div className='h-[400px] bg-[rgb(44,8,6)] p-4 rounded-lg flex flex-col justify-center items-center lg:w-[50%] lg:flex-row lg:-mr-20 lg:z-10 lg:px-8'>
        <div>
          <h2 className='text-lg mb-6 font-bold'>IN THE PRESS</h2>
          <h1 className='text-3xl mb-8 font-semibold'>Executive Chef, Jhame Letigio</h1>
          <p className='text-md'>
            Introducing Chef Jhame Letigio, the culinary mastermind behind Tabemono. With a passion for Japanese 
            cuisine and a dedication to sourcing the finest local ingredients, Chef Jhame brings the flavors of 
            Japan to the heart of the Philippines. Experience his creative vision and unparalleled skill as he crafts 
            exquisite dishes that celebrate the essence of Japanese gastronomy.
          </p>
        </div>
      </div>
      <div className='relative lg:w-[50%] pt-6 lg:pt-0 mx-auto'>
        <div className='absolute inset-0 bg-black opacity-60'/>
        <img src={chef} alt="chef" className='h-[500px] rounded-md'/>
      </div>
    </div>
  )
}
