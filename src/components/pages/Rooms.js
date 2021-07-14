import React from 'react'
import './Rooms.css';
import { Room } from '../Room';


const Rooms = () => {
    
      const rooms = Room.map(({src}, index)=>{
  return (
  <div className='pic'key={index}>
      <img src={src} alt="you"/>
  </div>
  );

      }) 
            
    
        
        return (
            <>
           <div className="room-gallery">
               {rooms}
           </div>
            
            
            </>
        )
    }
    


export default Rooms
