import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const Black = () => {
    const blackRef = useRef(null);
   
    useGSAP(()=>{
        gsap.to(blackRef.current,{
            y:"-100%",
            delay:1.5,
            duration:0.2,
            rotate:0,
            
        })
    
    })
    useGSAP(()=>{
        gsap.to(blackRef.current,{
            y:"-100%",
            delay:1.5,
            duration:0.2,
            rotate:360,
            
        })
    
    })
  return (
   <div>
     <div ref = {blackRef} className="rotate-12 h-screen bg-[#111] w-full absolute z-20 "></div>
   </div>
  )
}

export default Black
