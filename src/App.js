import React from 'react'
import './App.css';
import Landing from './landing/Landing'
import {Switch, Route, Link, NavLink } from 'react-router-dom'
import Home from './home/Home';

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
    <section className='entry-container'>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/home' render={() => <Home/> } />
      </Switch>
    </section>
   </main>
  );
}

export default App;