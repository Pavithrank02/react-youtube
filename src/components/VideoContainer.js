import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { GET_API_KEY } from '../utils/Constants';
import VideoCard, { AdVideoCard } from './VideoCard'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])

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