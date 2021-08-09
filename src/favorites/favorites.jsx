import React from 'react' 
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './favorites.css'

const Favorites = ({ favorites }) => {
  let eachFavorite = favorites.map(each => {
    
    return <li>"{each.quote}"</li>})

  
    return (
      <div>
        {!favorites.length && <h3 className='no-fav'>No favorites yet!</h3>}
        {favorites && 
        <ul>
          {eachFavorite}
        </ul>}
        <Link to='/home'>
          <button className='btn'>Back to Home</button>
        </Link>
      </div>
    )
}


export default Favorites

Favorites.propTypes = {
  favorites: PropTypes.array,
  eachFavorite: PropTypes.string
}
