import React from 'react'
import { NavLink } from 'react-router-dom'

const Landing = () => {
    
    return (
        <section className='descriptors'>
          <h2>Satire or Statement? The real Kanye fans will know.</h2>
          <p>To Play: read the quote and select if you think it's a real or a fake kanye quote. Save the quote for later to reflect on it's inspiration</p>
          <NavLink to='/' className='enter-btn'>
            <button>Play</button>
          </NavLink>
        </section>
    )
}

export default Landing