import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between border shadow-lg'>
      <div className='flex h-12 mt-1 col-span-1' >
        <img src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png" alt="hamlogo" />
        <img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="ulogo" />
      </div>
      <div className='flex p-2 m-1 col-span-10'>
        <input className='border-2 rounded-l-full w-96' type="type" />
        <button className="p-2  rounded-r-full border bg-grey-100 ">Search</button>
      </div>
      <div className='flex h-12 mr-5 col-span-1 mt-2'>
      <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="sign" />
      </div>
    </div>
  )
}

export default Header