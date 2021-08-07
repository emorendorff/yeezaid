import React from 'react' 
import './home.css'
import {useState, useEffect } from 'react'

const Home = () => {

        const [kanyeQuotes, setKanyeQuotes] = useState([])
        const [trumpQuotes, setTrumpQuotes] = useState([])
        const [error, checkError] = useState('')
        const [isLoading, setIsLoading] = useState(false)
        const [randomNum, setRandomNum] = useState(0)

        
    
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

    useEffect(() => {
        getKanyeQuotes()
        getTrumpQuotes()
        getRandomNum()
    }, [])



    


    return (
        <div>
            {!trumpQuotes && !kanyeQuotes && !error && isLoading && <h2 className='loading'>Getting quote...</h2> }
            {!trumpQuotes && !kanyeQuotes && error && <h2 className='loading'>Can't load quotes right now, try again later</h2>}
            {trumpQuotes && kanyeQuotes && !isLoading && !error && randomNum === 1 && <h3 className='quote'>"{kanyeQuotes.quote}"</h3>}
            {trumpQuotes && kanyeQuotes && !isLoading && !error && randomNum === 2 && <h3 className='quote'>"{trumpQuotes.message}"</h3>}
            <div className='button-flex'>
                <button className='ye'>Ye</button>
                <button className='ne'>Ne</button>
            </div>
            <button>Add to favorite yeezaids</button>
        </div>
    )

}

export default Home
