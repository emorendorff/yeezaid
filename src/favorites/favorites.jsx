import React from 'react' 
import { Link } from 'react-router-dom'

const Favorites = ({ favorites }) => {
    return (
      <div>
        {!favorites && <h3>No favorites yet!</h3>}
        {favorites && <p>{favorites.quote}</p>}
        <Link to='/home'>
          <button>Back to Home</button>
        </Link>
      </div>
    )
}


export default Favorites