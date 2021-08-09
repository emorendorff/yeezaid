import React from 'react' 
import { Link } from 'react-router-dom'

const Favorites = ({ favorites }) => {
  let eachFavorite = favorites.map(each => {
    
    return <li>{each.quote}</li>})

  
    return (
      <div>
        {!favorites.length && <h3>No favorites yet!</h3>}
        {favorites && 
        <ul>
          {eachFavorite}
        </ul>}
        <Link to='/home'>
          <button>Back to Home</button>
        </Link>
      </div>
    )
}


export default Favorites