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
import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
const App = () => {
    const boxRef = useRef();
    useGSAP(()=>{
        gsap.to(boxRef.current,{
            x:800,
            delay:1,
            duration:4,
            backgroundColor:"yellow",
            rotate:360,
        })
    })
  return (
    <div>
      <div ref={boxRef} className="ball"></div>
    </div>
  )
}

export default App
