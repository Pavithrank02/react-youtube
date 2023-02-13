import { useState, useEffect } from "react";
import { GET_API_KEY } from './Constants';
const useVideo = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    getApiData();
  }, []);
  
  async function getApiData() {
    console.log(videos)
    const data = await fetch(GET_API_KEY);
    const json = await data.json()
    setVideos(json.items)
  }

  return videos

}

export default useVideo
