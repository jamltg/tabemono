import React, { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setOpen] = useState(false)
  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <div className='bg-transparent absolute top-0 z-10 w-full'>
      <div className='flex bg-transparent h-24 max-w-[1240px] mx-auto justify-end items-center px-8'>
        <ul className='hidden md:flex text-white items-center'>
          <li className='p-4'>About Us</li>
          <li className='p-4'>Services</li>
          <li className='p-4'>Book a Reservation</li>
        </ul>
        <div className='md:hidden'>
          <Hamburger toggled={isOpen} toggle={toggleMenu} size={30} color="white"/>
        </div>    
      </div>
      <div>
        {isOpen && (
          <motion.ul 
            className='flex flex-col text-white text-left'
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1.2}}
          >
            <li className='p-4 text-xl border-b-2 border-t-2 text-right'>
              <h1 className='max-w-[1240px] mx-auto px-8'>About Us</h1>
            </li>
            <li className='p-4 text-xl border-b-2 text-right'>
              <h1 className='max-w-[1240px] mx-auto px-8'>Services</h1>
            </li>
            <li className='p-4 text-xl border-b-2 text-right'>
              <h1 className='max-w-[1240px] mx-auto px-8'>Book a Reservation</h1>
            </li>
          </motion.ul>
        )}
      </div>
    </div>
  )
}
