// using useRef
// import React, { useRef } from 'react'
// import {useGSAP} from '@gsap/react'
// import gsap from 'gsap'

// const App = () => {
//   const boxRef= useRef()
//   useGSAP(function(){
//     gsap.to(boxRef.current,{
//       x:600
//     })
//   })
//   return (
//     <div>
//       <div ref ={boxRef} className="box"></div>
//     </div>
//   )
// }

// export default App

// Another Method
// import React from 'react'
// import {useGSAP} from '@gsap/react'
// import gsap from 'gsap'
// const App = () => {
//   useGSAP(()=>{
//     gsap.to(".box",{
//       x:1000,
//       delay:1,
//       duration:4,
//       rotate:360,
//       backgroundColor:"blue"

//     })
//   })
//   return (
//     <div>
//       <div className="box">Anshuman</div>
//     </div>
//   )
// }

// export default App

// Revision
// import React, { useRef } from 'react'
// import {useGSAP} from '@gsap/react'
// import gsap from 'gsap';
// const App = () => {
//     const boxRef = useRef();
//     useGSAP(()=>{
//         gsap.to(boxRef.current,{
//             x:800,
//             delay:1,
//             duration:4,
//             backgroundColor:"yellow",
//             rotate:360,
//         })
//     })
//   return (
//     <div>
//       <div ref={boxRef} className="ball"></div>
//     </div>
//   )
// }

// export default App

// ONE STEP UP

// import React from 'react'
// import {useGSAP} from '@gsap/react'
// import gsap from 'gsap'
// import { useRef } from 'react'
// const App = () => {
//     const boxRef = useRef()
//     const circleRef = useRef();
//     const tl = gsap.timeline()
//     useGSAP(()=>{
//     tl.to(boxRef.current,{
//       x:1000,
//       rotate:360,
//       borderRadius:"50%",
//       duration:3,
//       delay:1,

//     })
//     gsap.to(circleRef.current,{
//       x:1000,
//       rotate:360,
//       borderRadius:"10px",
//       duration:3,
     

//     })
//     })
//   return (
//     <div>
//       <div ref={boxRef} className="box"></div>
//       <div ref={circleRef} className="circle"></div>
//     </div>
//   )
// }

// export default App


// One Step Ahead
// Abour Scope

// import React, { useRef } from 'react'
// import {useGSAP} from '@gsap/react'
// import gsap from 'gsap';

// const App = () => {
//   const boxRef = useRef();
//   const circleRef = useRef();
//   useGSAP(()=>{
//     gsap.to(".box",{
//       rotate:360,
//       duration:1.5,
//       delay:1
//     })
//   },{scope:".container1"})
//   return (
//    <main>
//     <div className="container1">
//       <div className="box"></div>
//       <div className="circle"></div>
//     </div>
//     <div className="container2">
//     <div className="box"></div>
//     <div className="circle"></div>
//     </div>
//    </main>
//   )
// }

// export default App

// One Step Ahead

// import React, { useRef, useState, useEffect } from 'react';
// import gsap from 'gsap';

// const App = () => {
//   const [xmove, setMove] = useState(0);
//  var random =  gsap.utils.random(-500,500,100)
//   const boxRef = useRef(null);

//   useEffect(() => {
    
//       gsap.to(boxRef.current, {
//         x: xmove,
//         duration: 1,
//       });
    
//   }, [xmove]);

//   return (
//     <main>
//       <button onClick={() => setMove(random)}>Animate Box</button>
//       <div ref={boxRef} className="box"></div>
//     </main>
//   );
// }

// export default App;

// Image Animation 


// import React, { useEffect, useRef, useState } from 'react'
//  import image from './jackRemovedBack.png'
//  import coco from './coco.webp'
//  import gsap from 'gsap'
// const App = () => {
//   const jackRef = useRef(null);
//   const cocoRef = useRef(null);
//   const {contextSafe} = useEffect();
//   const [Xmove,setXMove] = useState(0);
//   const [Ymove,setYMove] = useState(0);
//  const XRandom =  gsap.utils.random(-1000,1000,100)
//  const YRandom =  gsap.utils.random(-700,700,100)
//   useEffect(()=>{
//     gsap.to(cocoRef.current,{
//       x:Xmove,
//       y:Ymove,
//       duration:2,
//     })
//   },[Xmove,Ymove])
//   const moveJack = contextSafe((e)=>{
//     gsap.to(jackRef.current,{
//       x:e.clientX-500,
//       y:e.clientY-700,
//     })
//   })
//   return (
//     <main onMouseMove={(e)=>{
//       moveJack(e)
//     }}>
//       <img className='jack' ref={jackRef}  src={image} alt="" />
//       <img onClick={()=>{
//         setXMove(XRandom)
//         setXMove(YRandom)
//       }} className='coco' ref={cocoRef} src={coco} alt="" />
//     </main>
//   )
// }

// export default App

import React from 'react'
import LoadParent from './Components/Loading/LoadParent'
import Home from './Components/LandingPage/Home'

const App = () => {
  return (
    <div className='h-screen bg-[#111]'>
    <LoadParent/>
    <Home/>
    </div>
  )
}

export default App





