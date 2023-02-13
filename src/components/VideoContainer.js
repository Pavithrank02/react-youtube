import React from 'react'
import { Link } from 'react-router-dom';
import useVideo from '../utils/useVideo';
import VideoCard, { AdVideoCard } from './VideoCard'

const VideoContainer = () => {

  const videos = useVideo()
  
  return (
    <div className="flex flex-wrap ml-4">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  )
}

export default VideoContainer