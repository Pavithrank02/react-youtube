import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector(store=> store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  
  return (
    <div className='p-5 shadow-lg w-48 '>
     <ul>
      <li>Home</li>
      <li>Shorts</li>
      <li>Subscription</li>
     </ul>
     <h1 className="font-bold pt-5 pb-2">Subscription</h1>
     <ul>
      <li>Library</li>
      <li>History</li>
      <li>Videos</li>
      <li>Liked Videos</li>
     </ul>
     <h1 className="font-bold pt-5 pb-2">Watch Later</h1>
     <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar