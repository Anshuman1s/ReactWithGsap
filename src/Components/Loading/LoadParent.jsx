import React from 'react'
import LoadChild from './LoadChild'

const LoadParent = () => {
  return (
    <div className='h-2 w-full fixed bg-red-600 '>
      <LoadChild/>
    </div>
  )
}

export default LoadParent
