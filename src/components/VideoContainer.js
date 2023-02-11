import React, { useEffect, useState } from 'react'
import { GET_API_KEY } from '../utils/Constants';
import VideoCard from './VideoCard'



const VideoContainer = () => {
  const [videos, setVideos] = useState()

  useEffect(() => {
    getApiData();
  }, []);
  const getApiData = async () => {
    const data = await fetch(GET_API_KEY);
    const json = await data.json()
    setVideos(json.items)
  }
  return (
    <div className="flex flex-wrap ml-4">
      {videos?.map((video) => (
        // <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        // </Link>
      ))}
    </div>
  )
}

export default VideoContainer