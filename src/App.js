import React from 'react'
import './App.css';
import Landing from './landing/Landing'
import {Switch, Route, Link, NavLink } from 'react-router-dom'

function App() {
  return (
  <main>
    <header>
      <nav>
       <Link to='/'> 
        <h1>Yeezaid What Now?</h1>
       </Link> 
       <NavLink className='fav-link' to='/favorites'>My Favorite Yeezaids</NavLink>
       </nav>
    </header>
    <Switch>
      <Route component={Landing}/>
      <Route to='/game' component={Game}/>
    </Switch>
   </main>
  );
}

export default App;