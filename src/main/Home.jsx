import React from 'react';
import Header from './Header';
import Hero from '../components/Hero';
import Chef from './Chef';
import BestSellers from './BestSellers';
import Book from '../components/Book';
import Footer from './Footer';
import Tab from './Tab';
import Slider from '../components/Slider';
import Story from '../components/Story';

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Story/>
      <Tab/>
      <Chef/>  
      <BestSellers/>
      <Slider/>
      <Book/>
      <Footer/>
    </div>
  )
}
