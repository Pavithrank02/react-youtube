import React from 'react'
import { CommentLists } from './Comments'

const CommentsContainer = () => {
  const commentsData = [
    {
      name:"Pavithran",
      comment: "Lorem ahhsj shjhd",
      replies: [
        {
          name:"Pavithran",
          comment: "Lorem ahhsj shjhd",
          replies: [
            {
              name:"Pavithran",
              comment: "Lorem ahhsj shjhd",
              replies: []
            },
          ] 
    
        },
        {
          name:"Pavithran",
          comment: "Lorem ahhsj shjhd",
          replies: [
            {
              name:"Pavithran",
              comment: "Lorem ahhsj shjhd",
              replies: []
            },
          ] 
    
        },
        {
          name:"Pavithran",
          comment: "Lorem ahhsj shjhd",
          replies: [
            {
              name:"Pavithran",
              comment: "Lorem ahhsj shjhd",
              replies: []
            },
          ] 
    
        },
        
  ]

    },
    {
      name:"Pavithran",
      comment: "Lorem ahhsj shjhd",
      replies: [
        {
          name:"Pavithran",
          comment: "Lorem ahhsj shjhd",
          replies: []
        },
      ] 

    },
    {
      name:"Pavithran",
      comment: "Lorem ahhsj shjhd",
      replies: [
        {
          name:"Pavithran",
          comment: "Lorem ahhsj shjhd",
          replies: []
        },
      ] 

    },
    {
      name:"Pavithran",
      comment: "Lorem ahhsj shjhd",
      replies: [
        {
          name:"Pavithran",
          comment: "Lorem ahhsj shjhd",
          replies: []
        },
      ] 

    },
]
return (
  <div>
   <p className='font-bold text-2xl m-2'> Comments </p> 
     <CommentLists comments={commentsData}/>
  </div>
)
}

export default CommentsContainer