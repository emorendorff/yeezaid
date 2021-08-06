import React from 'react'
import { Link } from 'react-router-dom'
import Kanye from '../icon_home.png'
import './landing.css'

const Landing = () => {
    
    return (
        <section className='descriptors'>
          <img className='kanyeimg' src={Kanye} alt='kanye face icon'/>
          <h2>Satire or Statement? The real Kanye fans will know.</h2>
          <h3 className='bold'>To Play:</h3>
          <h4>read the quote and select if you think it's a real or a fake kanye quote. Save the quote for later to reflect on it's inspiration</h4>
          <Link to='/home'>
            <button className='play-btn'>Play</button>
          </Link>
        </section>
    )
}

export default Landing

