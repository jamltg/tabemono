import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import sliderData from '../data/sliderData.json';
import '../index.css';

export default function Slider() {
  return (
    <div className="bg-black slide-container py-8">
      <h1 className='text-white text-center text-3xl lg:text-5xl font-shikamaru md:pb-6'>GALLERY</h1>
      <Slide slidesToScroll={2} slidesToShow={2} indicators={true} transitionDuration={200}>
        {sliderData.map((image, index)=> (
          <div key={index}>
            <div className='flex items-center justify-center bg-contain h-[400px] md:h-[450px] lg:h-[630px]'>
              <img src={require(`../${image.url}`)} alt="restaurant"/>
            </div>
          </div>
        ))} 
      </Slide>
    </div>
  )
}
