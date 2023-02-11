import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list= ["All", "Gaming", "Songs", " Movies", "Cricket", "Sports", "agent", "Rolex", "Cards", " Movies", "Cricket", "Sports", "agent", "Rolex"," Movies", "Cricket", ];
  return (
    <div className='flex'>
      {list.map((item) => (
      <Button name={item}/> 
      ))}
    </div>
  )
}

export default ButtonList