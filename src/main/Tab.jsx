import React, { useState } from 'react';
import '../index.css';
import EventsTab from '../components/EventsTab';
import WinesTab from '../components/WinesTab';

export default function Tab() {
  const [eventsClicked, setEventsClicked] = useState(true);
  const [winesClicked, setWinesClicked] = useState(false);
  return (
    <div className='bg-black py-8'>
      <div className='max-w-[1240px] px-8 mx-auto text-white'>
        <div className='bg-[rgb(44,8,6)] px-4 py-4 flex justify-around rounded-xl text-md font-md'>
          <div>
            <button>
              <h1
                onClick={()=>{
                  setEventsClicked(true);
                  setWinesClicked(false);
                }}
                className={`${eventsClicked ? 'active cursor-pointer text-lg font-medium'
                : 'cursor-pointer text-lg'}`}
              >
                Private Events
              </h1>
            </button>
          </div>
          <div>
            <button>
            <h1
                onClick={()=>{
                  setEventsClicked(false);
                  setWinesClicked(true);
                }}
                className={`${winesClicked ? 'active cursor-pointer text-lg font-medium'
                : 'cursor-pointer text-lg'}`}
              >
                World-Class Wines
              </h1>
            </button>
          </div>
        </div>
        <div className='mt-4 h-auto'>
          <div>
            {eventsClicked && <EventsTab/>}
            {winesClicked && <WinesTab/>}
          </div>
        </div>
      </div>
    </div>
  )
}
