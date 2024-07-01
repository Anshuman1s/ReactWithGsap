import React from 'react'
import LoadChild from './LoadChild'

const LoadParent = () => {
  return (
    <div className='h-1 w-full fixed bg-transparent z-50'>
      <LoadChild/>
    </div>
  )
}

export default LoadParent
