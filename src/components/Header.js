import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_KEY } from '../utils/Constants';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("")
  
  useEffect(() => {
    console.log(getYoutubesearchData());

  }, [searchQuery])
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }
  const getYoutubesearchData = async() => {
    const data = await fetch(YOUTUBE_SEARCH_KEY + searchQuery);
    const json = await data.json()
    console.log(json)
  }
  return (
    <div className='flex justify-between border shadow-lg'>
      <div className='flex col-span-1' >
        <img 
        onClick={toggleMenuHandler}
        className='h-11 p-1 mt-3 cursor-pointer'
        src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png" alt="hamlogo" />
        <img 
        className='h-12  mt-3 cursor-pointer'
        src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="ulogo" />
      </div>
      <div className='flex p-2 m-1 col-span-10'>
        <input 
        className='border-2 rounded-l-full w-96' 
        type="type" 
        onChange={(event) => setSearchQuery(event.target.value) }
        />
        <button className="p-2  rounded-r-full border bg-gray-100 ">Search</button>
      </div>
      <div className='flex h-12 mr-5 col-span-1 mt-2'>
      <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="sign" />
      </div>
    </div>
  )
}

export default Header