import React, { useRef, useState } from 'react'
import NavBar from '../Navbar/NavBar'
import CenterText from '../Center/CenterText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Black from './Black'

const Home = () => {
    const pageRef = useRef(null)
    useGSAP(()=>{
        gsap.to(pageRef.current,{
            opacity:1,
            delay:2.1,
            duration:0.5
        })
    })
    useGSAP(()=>{
        gsap.to(pageRef.current,{
            opacity:1,
            delay:2.1,
            duration:0.6,
            x:500,
        })
    })
   
  
    const [data,setData] = useState(0);
  return (
    <div className='m-10 p-4 flex items-center justify-center'>
        <Black/>
        <div ref={pageRef}  className='opacity-0 h-screen w-full  bg-cover bg-center bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)] '>
      <NavBar {data}/>
      <CenterText/>
    </div>
    </div>
  )
}

export default Home
