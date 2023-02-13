import React from 'react'
import { Outlet } from 'react-router-dom'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'

const MainBody = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default MainBody