import React from 'react' 
import './home.css'
import {useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Home = ({favorites, setFavorites}) => {

  const [kanyeQuotes, setKanyeQuotes] = useState([])
  const [trumpQuotes, setTrumpQuotes] = useState([])
  const [error, checkError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [randomNum, setRandomNum] = useState(0)
  const [userHasAnswered, setUserHasAnswered] = useState(false)
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null)
  const [isRestarting, setIsRestarting] = useState(false)

  const getKanyeQuotes = async () => {
    checkError('')
    setIsLoading(true)
    try {
      const response = await fetch('https://api.kanye.rest/')
      const kanyeQuotes = await response.json()
      setKanyeQuotes(kanyeQuotes)
    } catch(error) {
      checkError('When it all falls down')
    } finally {
      setIsLoading(false)
    }
  }

  const getTrumpQuotes = async () => {
    checkError('')
    setIsLoading(true)
    try {
      const response = await fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
      const trumpQuotes = await response.json()
      setTrumpQuotes(trumpQuotes)
    } catch(error) {
      checkError('Big mistake. Huge.')
    } finally {
      setIsLoading(false)
    }
  } 

  const getRandomNum = () => {
    let random = Math.floor(Math.random() * 2) + 1  
    setRandomNum(random)
  }

  const handleFavorites = () => {
    if (!favorites.includes(kanyeQuotes)) {
    setFavorites([...favorites, kanyeQuotes])
    }
  }

  const handleClick = (event) => {
    gameLogic(event)
    setUserHasAnswered(true)
  }

  const handlePlayAgain = () => {
    setIsRestarting(true)
    setUserHasAnswered(false)
    setIsCorrectAnswer(null)
  }

  const gameLogic = (event) => {
    // eslint-disable-next-line eqeqeq
    if (randomNum == event.target.value) {
      setIsCorrectAnswer(true)
    }
    else {
      setIsCorrectAnswer(false)
    }
  }

  useEffect(() => {
    if (userHasAnswered === false) {
      getKanyeQuotes()
      getTrumpQuotes()
      getRandomNum()
      setIsRestarting(false)
    }
  }, [userHasAnswered])

  return (
    <section className='home-container'>
      {userHasAnswered === false && isRestarting === false && !isLoading && (
        <section className='game'>
          {!trumpQuotes && !kanyeQuotes && !error && isLoading && <h2 className='loading'>Getting quote...</h2> }
          {!trumpQuotes && !kanyeQuotes && error && <h2 className='loading'>Can't load quotes right now, try again later</h2>}
          {trumpQuotes && kanyeQuotes && !isLoading && !error && randomNum === 1 && <h3 className='quote'>"{kanyeQuotes.quote}"</h3>}
          {trumpQuotes && kanyeQuotes && !isLoading && !error && randomNum === 2 && <h3 className='quote'>"{trumpQuotes.message}"</h3>}
          <div className='button-flex'>
            <button className='ye btn' onClick={handleClick} value={1}>Ye</button>
            <button className='ne btn' onClick={handleClick} value={2}>Ne</button>
          </div>
        </section>)}
      {userHasAnswered && isCorrectAnswer === true &&
        <section className='answer'>
          <h3>Correct!</h3>
          <div className='button-flex'>
            <button className='btn' onClick={handlePlayAgain}>play again</button>
            {randomNum === 1 && <button className='btn' onClick={handleFavorites}>Add to Favorite Yeezaids</button>}
          </div>
        </section>
      }
      {userHasAnswered && isCorrectAnswer === false &&
        <section className='response-container'>
          <h3 className='answer'>Wrong!</h3>
          <button className='btn'onClick={handlePlayAgain}>play again</button>
        </section>
      }
    </section>
  )
}

export default Home

Home.propTypes = {
  randomNum: PropTypes.number,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  kanyeQuotes: PropTypes.array, 
  trumpQuotes: PropTypes.array,
  userHasAnswered: PropTypes.bool,
  isRestarting: PropTypes.bool,
  isCorrectAnswer: PropTypes.bool
}