import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className='p-7 shadow-lg w-56 '>
      <ul >
        <li className='hover:bg-slate-200 w-[7rem] '><Link to="/">Home</Link></li>
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
        <li> Sppof</li>
        <li> Series</li>
      </ul>
    </div>
  )
}

export default Sidebar