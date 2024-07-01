import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
const Black = () => {
    const blackRef = useRef(null);
    const pageRef = useRef(null)
    useGSAP(()=>{
        gsap.to(homeRef.current,{
            y:"-100%",
            delay:1.8,
            duration:0.5
        })
    useGSAP(()=>{
        gsap.to(pageRef.current,{
            opacity:1,
            delay:2.1,
            duration:0.5
        })
    })
    })
  return (
   <div>
     <div ref = {blackRef} className="h-screen bg-[#111] w-full fixed z-10"></div>
   </div>
  )
}

export default Black
