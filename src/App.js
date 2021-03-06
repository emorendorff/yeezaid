import React from 'react'
import PropTypes from 'prop-types'
import './App.css';
import Landing from './landing/Landing'
import {useState} from 'react'
import {Switch, Route, Link, NavLink } from 'react-router-dom'
import Home from './home/Home';
import Error from './error/Error'
import Favorites from './favorites/Favorites'

function App() {
  const [favorites, setFavorites] = useState([])

  return (
  <main>
    <header>
      <nav>
       <Link className='home-link' to='/'> 
        <h1 className='header-title'>YEezaid What Now?</h1>
       </Link> 
       <NavLink className='fav-link' to='/favorites'>My Favorite Yeezaids</NavLink>
       </nav>
    </header>
    <section className='entry-container'>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/home' render={() => <Home favorites={favorites} setFavorites={setFavorites}/> } />
        <Route exact path='/favorites' render={() => <Favorites favorites={favorites}/> } />
        <Route render={() => <Error />}/>
      </Switch>
    </section>
   </main>
  );
}

export default App;

App.propTypes = {
  favorites: PropTypes.array
}