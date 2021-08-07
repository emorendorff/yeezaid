import { NavLink } from 'react-router-dom'
import React from 'react'




const Error = () => {
  return (
    <div className='error'>
      <h2> Whoops! Looks like this path doesn't exist. Click the button to go back to the main page  </h2>
        <NavLink  to='/'>
          <button className='go-back'>Go Back</button>
        </NavLink>
    </div>
  )
}

export default Error