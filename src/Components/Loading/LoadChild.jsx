import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react' 
import gsap from 'gsap'
const LoadChild = () => {
    const LineRef =  useRef(null)
    useGSAP(()=>{
        gsap.to(LineRef.current,{
            width:"100%",
            duration:1,
            delay:1
        })
    })
  return (
    <div ref={LineRef} className='w-0 h-full bg-green-500'>
      
    </div>
  )
}

export default LoadChild
