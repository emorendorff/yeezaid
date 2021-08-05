import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    
    return (
        <section className='descriptors'>
          <h2>Satire or Statement? The real Kanye fans will know.</h2>
          <p>To Play: read the quote and select if you think it's a real or a fake kanye quote. Save the quote for later to reflect on it's inspiration</p>
          <Link to='/home'>
            <button>Play</button>
          </Link>
        </section>
    )
}

export default Landing

