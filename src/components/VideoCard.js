import React from 'react'


const VideoCard = ({info}) => {
  const {snippet, statistics} = info;
  const {channelTitle, title, thumbnails }= snippet;
  return (
    <div className=' w-80 m-3  shadow-xl '>
      <img className="rounded-lg h-48 w-80" src={thumbnails.high.url} alt="imageURL" />
      <ul>
      <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views  •  {statistics.likeCount} Likes</li>
      </ul>
    </div>
  )
}

export const AdVideoCard = ({info}) => {
  return(

  <div className='p-1 m-1  border border-red-500 hover:bg-slate-400'> 
    <VideoCard info={info}/>
    </div>
  )
}

export default VideoCard