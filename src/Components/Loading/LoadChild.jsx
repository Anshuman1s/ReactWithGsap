import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react' 
import gsap from 'gsap'
const LoadChild = () => {
    const LineRef =  useRef(null)
    const tl = gsap.timeline();
    useGSAP(()=>{
        tl.to(LineRef.current,{
            width:"100%",
            duration:1.3,
            delay:0.7,
            ease:"expo.out"
        })
        .to(LineRef.current,{
          opacity:0,
        })
    })
  return (
    <div ref={LineRef} className='w-0 h-full bg-white'>
      
    </div>
  )
}

export default LoadChild
