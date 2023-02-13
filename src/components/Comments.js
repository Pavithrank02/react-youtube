import React from 'react'

const Comments = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className='flex bg-gray-200 rounded-lg my-2'>
      <div className='h-11 w-11 mx-2 '>
        <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="sign" />
      </div>
      <div>
      <p className='font-bold'>{name}</p>
      <p>{comment}</p>
      </div>
    </div>
  )
}
export const CommentLists = ({comments}) => {
  return comments.map((c, index) => (
    <div>
      <Comments key={index} data={c}/>
      <div className=' pl-5 border border-l-black ml-5'>
      <CommentLists comments= {c.replies}/>
      </div>
      </div>
  )

  )
}

export default Comments