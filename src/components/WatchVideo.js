import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice'
import CommentsContainer from './CommentsContainer'

const WatchVideo = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
  }, [])
  return (
    <div className='px-20 my-7'>
      <iframe 
      width="1050" 
      height="500" 
      src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>
      <div className=''>
       <CommentsContainer />
      </div>
    </div>
  )
}

export default WatchVideo