import React from 'react'
import './App.css';
import Landing from './landing/Landing'
import {useState, useEffect } from 'react'
import {Switch, Route, Link, NavLink } from 'react-router-dom'
import Home from './home/Home';
import Error from './Error/Error'

function App() {
  const [favorites, setFavorites] = useState([])

  return (
  <main>
    <header>
      <nav>
       <Link className='home-link' to='/'> 
        <h1 className='header-title'>Yeezaid What Now?</h1>
       </Link> 
       <NavLink className='fav-link' to='/favorites'>My Favorite Yeezaids</NavLink>
       </nav>
    </header>
    <section className='entry-container'>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/home' render={() => <Home favorites={favorites} setFavorites={setFavorites}/> } />
        <Route render={() => <Error />}/>
      </Switch>
    </section>
   </main>
  );
}

export default App;