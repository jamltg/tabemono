import React from 'react';
import bestSellersData from '../data/bestSellersData.json';

export default function BestSellerCard() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-6'>
      {bestSellersData.map((dish,index)=>(
        <div key={index} className='flex-grow py-4'>
          <img src={require(`../${dish.url}`)} alt="best seller dish" className='object-cover h-[500px] w-full'/>
          <h1 className='text-center font-medium text-2xl tracking-wider my-4'>{dish.title}</h1>
          <p className='text-center'>{dish.description}</p>
        </div>
      ))}
    </div>
  )
}