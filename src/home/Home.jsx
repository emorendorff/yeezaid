import React from 'react' 
import './home.css'
import {useState, useEffect } from 'react'

const Home = () => {

        const [quotes, setQuotes] = useState([])
        const [error, checkError] = useState('')
        const [isLoading, setIsLoading] = useState(false)
    
    const getRealQuotes = async () => {
        checkError('')
        setIsLoading(true)
        try {
            const response = await fetch('https://api.kanye.rest/')
            const quotes = await response.json()
            setQuotes(quotes)
            console.log(quotes)
        } catch(error) {
            checkError('When it all falls down')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getRealQuotes()
        console.log(getRealQuotes())
    }, [])

    return (
        <p className='quote'>{quotes.quote}</p>
    )

}

export default Home



