import React from 'react' 
import './home.css'
import {useState, useEffect } from 'react'

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
    <div>
      {userHasAnswered === false && isRestarting === false && !isLoading && (
        <div>
          {!trumpQuotes && !kanyeQuotes && !error && isLoading && <h2 className='loading'>Getting quote...</h2> }
          {!trumpQuotes && !kanyeQuotes && error && <h2 className='loading'>Can't load quotes right now, try again later</h2>}
          {trumpQuotes && kanyeQuotes && !isLoading && !error && randomNum === 1 && <h3 className='quote'>"{kanyeQuotes.quote}"</h3>}
          {trumpQuotes && kanyeQuotes && !isLoading && !error && randomNum === 2 && <h3 className='quote'>"{trumpQuotes.message}"</h3>}
          <div className='button-flex'>
            <button className='ye' onClick={handleClick} value={1}>Ye</button>
            <button className='ne' onClick={handleClick} value={2}>Ne</button>
          </div>
        </div>)}
      {userHasAnswered && isCorrectAnswer === true &&
        <div>
          <h3>Correct!</h3>
          <button onClick={handlePlayAgain}>play again</button>
          {randomNum === 1 && <button className='fav' onClick={handleFavorites}>Add to favorite yeezaids</button>}
        </div>
      }
      {userHasAnswered && isCorrectAnswer === false &&
        <div>
          <h3>Wrong</h3>
          <button onClick={handlePlayAgain}>play again</button>
        </div>
      }
    </div>
  )
}

export default Home