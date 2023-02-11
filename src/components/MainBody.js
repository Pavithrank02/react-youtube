import React from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'

const MainBody = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <MainContainer />
      </div>
  )
}

export default MainBody