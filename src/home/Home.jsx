import React from 'react' 
import './home.css'
import {useState, useEffect } from 'react'

const Home = () => {

        const [quote, setQuote] = useState([])
        const [error, checkError] = useState('')
        const [isLoading, setIsLoading] = useState(false)
    
    const getRealQuotes = async () => {
        setIsLoading(true)
        try {
            let response = await fetch('https://github.com/ajzbc/kanye.rest/blob/master/quotes.json')
            let quote = await response.json()
            setQuote(quote)
            console.log(quote)
        } catch(error) {
            checkError('When it all falls down')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <p>{quote}</p>
    )


}

export default Home


