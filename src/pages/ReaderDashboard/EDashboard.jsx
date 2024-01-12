import React from 'react'
import SideNav from './SideNav'
import Ebooks from './Ebooks'

const EDashboard = () => {
  return (
    <div className='flex flex-cols'>
      <SideNav/>
      <Ebooks/>
      </div>
  )
}

export default EDashboard