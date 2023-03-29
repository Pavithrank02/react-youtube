import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice'
import useVideo from '../utils/useVideo';
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat';

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const [name, setName] = useState("Show more")
  const [show, setShow] = useState(false);

  const videos = useVideo()
  console.log(videos)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
  }, [])
  const toggleShow = () => {
    setShow(!show)
    setName("Show Less")

  }
  const VideoDescriptionCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, localized, publishedAt } = snippet;
    const { description } = localized;
    return (
      <div>
        <div className=' w-[65rem] '>
          <p className="font-bold py-2 text-2xl"> {title} </p>
        </div>
        <div className='flex h-12 mr-5 mt-2'>
          <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="sign" />
          <div className='flex flex-col ml-2'>
            <p className=' font-bold'>{channelTitle}</p>
            <p className=' '>8k Subscribers</p>
          </div>
        </div>
        <div className='flex flex-col mt-3 rounded-xl bg-gray-200 hover:bg-slate-300'>
          <div className='flex font-bold mt-1'>
            <p className='  mx-4'>{statistics.viewCount} views  </p>
            <p> {publishedAt} </p>
          </div>
          <div className='mt-1 mx-4'>
            <button
              onClick={() => toggleShow()}
              className=' font-bold cursor-pointer'>{name}
            </button>
            {show ? <p className='mt-1 w-[65rem] text-justify' > {description}</p> : setName("Show More")}
          </div>
        </div>
      </div>
    )
  }
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
      <div>
        {videos.map((video) => {
          if (video.id === searchParams.get("v")) return <VideoDescriptionCard info={video} />
        })}
      
      </div>
      <div className=''>
        <CommentsContainer />
      </div>
    </div>
  )
}

export default WatchVideo