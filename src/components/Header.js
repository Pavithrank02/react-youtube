import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { BsSearch } from 'react-icons/bs'
import { YOUTUBE_SEARCH_KEY } from '../utils/Constants';
import { cacheResult } from '../utils/searchSlice';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestion, setShowSuggestions] = useState(false)

  const cacheSearch = useSelector((store) => store.search)
  const dispatch = useDispatch();

  useEffect(() => {

    const timer = setTimeout(() => {
      if (cacheSearch[searchQuery]) {
        setSuggestions(cacheSearch[searchQuery])
      } else {
        getYoutubesearchData();
      }
    }, 200);

    return (() => {
      clearTimeout(timer);
    })
  }, [searchQuery])
  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }
  const getYoutubesearchData = async () => {
    console.log(searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_KEY + searchQuery);
    const json = await data.json()
    setSuggestions(json[1])

    dispatch(cacheResult({
      [searchQuery]: json[1],
    }))
  }
  return (
    <div className='flex justify-between border shadow-lg'>
      <div className='flex col-span-1' >
        <img
          onClick={toggleMenuHandler}
          className='h-11 p-1 mt-3 cursor-pointer'
          src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png" alt="hamlogo" />
        <a href='/'>
          <img
            className='h-12  mt-3 cursor-pointer'
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="ulogo" />
        </a>
      </div>
      <div>
        <div className='flex p-2 m-1 col-span-10'>
          <input
            className='px-5 border-blue-700 border-2 rounded-l-full w-[37rem]'
            type="type"
            onChange={(event) => setSearchQuery(event.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="p-3 w-14  rounded-r-full cursor-auto border border-t-2 shadow-lg bg-gray-100 "><BsSearch /></button>
        </div>
        {showSuggestion && searchQuery &&
          <div className='absolute scr ml-3 p-5 w-[37rem] bg-white rounded-lg' >
            <ul>
              {suggestions.map((suggest) => <li key={suggest} className=' flex py-2 shadow-sm hover:bg-gray-100'><BsSearch className='m-1' />{suggest}</li>)}
            </ul>
          </div>}
      </div>
      <div className='flex h-12 mr-5 col-span-1 mt-2'>
        <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="sign" />
      </div>
    </div>
  )
}

export default Header