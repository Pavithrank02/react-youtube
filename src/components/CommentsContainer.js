import React from 'react'
import { CommentLists } from './Comments'

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Pavithran",
      comment: "Lorem ahhsj shjhd",
      replies: [
        {
          name: "Pavithran",
          comment: "Lorem ahhsj shjhd",
          replies: [
            {
              name: "Pavithran",
              comment: "Lorem ahhsj shjhd",
              replies: []
            },
          ]

        },
        {
          name: "Pavithran",
          comment: "Lorem ahhsj shjhd",
          replies: [
            {
              name: "Pavithran",
              comment: "Lorem ahhsj shjhd",
              replies: []
            },
          ]

        },
        {
          name: "Pavithran",
          comment: "Lorem ahhsj shjhd",
          replies: [
            {
              name: "Pavithran",
              comment: "Lorem ahhsj shjhd",
              replies: []
            },
          ]

        },

      ]

    },
    {
      name: "Pavithran",
      comment: "Lorem ahhsj shjhd",
      replies: [
        {
          name: "Pavithran",
          comment: "Lorem ahhsj shjhd",
          replies: []
        },
      ]

    },
    {
      name: "Pavithran",
      comment: "Lorem ahhsj shjhd",
      replies: [
        {
          name: "Pavithran",
          comment: "Lorem ahhsj shjhd",
          replies: []
        },
      ]

    },
    {
      name: "Pavithran",
      comment: "Lorem ahhsj shjhd",
      replies: [
        {
          name: "Pavithran",
          comment: "Lorem ahhsj shjhd",
          replies: []
        },
      ]

    },
  ]
  return (
    <div className='flex flex-col'>
      <p className='font-bold text-2xl m-2'> Comments </p>
      <div className='flex'>
        <img
          className='h-11 w-11 mx-2 '
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="sign" />
        <div>
          <input
            type="text"
            className='mt-1 w-[62rem] border border-b-black'
            placeholder='Add Comment'
          />
        </div>
      </div>
      <CommentLists comments={commentsData} />
    </div>
  )
}

export default CommentsContainer