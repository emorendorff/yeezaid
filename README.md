# YEesaid What Now?  

### Table of Contents
- [Overview](#overview)
- [Learning Goals](#learning-goals)
- [Instructions for Viewing](#instructions-for-viewing)
- [Walkthrough](#walkthrough)
- [Tech Stack](#tech-stack)
- [Future Features](#future-features)
- [Contributors](#contributors)

### Front-End Final Mod 3 Project by: [Em Orendorff](https://github.com/emorendorff)

## Overview
Those Kanye West fans that love his music but are constantly astounded at some of the things that he's said in interviews or on stage. How do we know what's real and what's not? What is inspirational and what makes 0 sense? The real fans will know and these fans are inspired and motivated by the absurdity. This was our final solo project for Mod 3, focusing on a niche audience and showcasing our React skillset learned throughout this mod in addition to Router, Cypress, Hooks, and PropTypes. Utilizing a Kanye quote API, I needed a way to generate "fake" quotes to throw users off. This was done by grabbing an API from the next most absurd quote API I could think of, Donald J. Trump. Some are easier to guess than others, but some are true gems. The spec for this project can be found [here](https://frontend.turing.edu/projects/module-3/niche-audience.html)

# Instructions for Viewing Locally 
  * Clone down this repo by copying the SSH key and from your terminal git clone <repo SSH key>
  * `npm i` to install dependencies
  * cd into the repo
  * `npm start` to activate the server
  * Open localhost:3000 in your browser to view the project

  
# Learning Goals 
  * Build upon the foundational skills of React  
  * Utilizes React Router for url navigation
  * Demonstart knowledge of error handling and conditional rendering
  * Retrieve and display quotes from https://kanye.rest/ and https://whatdoestrumpthink.com/api-docs/index.html?javascript#get-a-personalized-trump-quote
  * Utilize PropTypes 
  * End-to-end testing of user flows using Cypress
  
# Walkthrough
  
- As a user, you are greeted with Yeezus himself, in addition to instructions on how to play. Upon clicking, users are taken from the landing page to the home, where a random generated quote is shown for you to pick if it's real ('Ye') or not ('Ne')
  
![landing and initial play](https://user-images.githubusercontent.com/77934658/128788523-13e9c21d-e9bb-4c9c-a5af-cd7daa37b748.gif)

- Is the quote speaking to you? Want to save it for reference? Users may save correctly guessed Kanye quotes to their Favorite Yeezaids section

![favorites](https://user-images.githubusercontent.com/77934658/128788625-737b4437-d9d9-4cc7-af11-3e7b23d98cfd.gif)
   
- Router Error Handling - No favorites saved? That's okay! Trying to go to a url that doesn't exist? Don't worry, we'll guide you back to where you're supposed to be. 

![errors](https://user-images.githubusercontent.com/77934658/128788884-cb72a0c7-99e3-4736-86d2-867d8903166d.gif)


  
- Responsiveness - Viewable on mobile! 
<img width="261" alt="mobile view of landing page" src="https://user-images.githubusercontent.com/77934658/128789065-eb2f2b1f-2896-4d44-868b-490e216987c8.png">

# Tech Stack
<table>
  <tr>
    <td>React w/ Hooks</td>
    <td>React Router</td>
    <td>CSS</td>
    <td>Cypress</td>
  </tr>
  <tr>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react-router.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/css-3.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/cypress.svg"/></td>
  </tr>
</table>
  
# Future Features 
 
  - User ability to delete quotes from their collection  
  - Additional error handling
  - Additional testing of user flows and unit tests 
  - Further conditional rendering to tell users if quote was Trump or Kanye and let them sort between the two
  - Generating inspirational posters based off of user's favorite quotes
  - Local storage and system to keep track of correct guesses
  
# Contributors
 
 <table>
  <tr>
    <td><a href="https://github.com/emorendorff">Em Orendorff</td>
  </tr>
  <tr>
    <td><img width="150" height="auto" src="https://avatars.githubusercontent.com/u/77934658?v=4" alt="Em Orendorff avatar"/></td>
  </tr>
</table>

Project Managers:  
  Kayla Wood https://github.com/kaylaewood  
  Scott Ertmer https://github.com/sertmer
  
Turing School of Software & Design 
  
