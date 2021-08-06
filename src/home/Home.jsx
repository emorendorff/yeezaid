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
        const min = 1 
        const max = 2
        const random = Math.floor(Math.random() * (max-min) + min) 
        setRandomNum(random)
    }

    useEffect(() => {
        getKanyeQuotes()
        getTrumpQuotes()
        getRandomNum()
    }, [])

  


    return (
        <div>
            <p className='quote'>{kanyeQuotes.quote}</p>
            <p>{trumpQuotes.message}</p>
        </div>
    )

}

export default Home



