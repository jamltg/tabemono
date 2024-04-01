import React from 'react';
import BestSellerCard from '../components/BestSellerCard';

export default function BestSellers() {
  return (
    <div className='bg-black h-auto text-white py-8'>
      <div className='max-w-[1240px] px-8 mx-auto'>
        <h1 className='text-center text-5xl font-shikamaru py-4 lg:pb-8'>Our Bestsellers</h1>
        <BestSellerCard/>
      </div>
    </div>
  )
}
