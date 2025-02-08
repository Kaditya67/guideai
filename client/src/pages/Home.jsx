import React from 'react'
import Navbar from '../components/Navbar'
import NewsItem from '../components/Postcard'



function Home() {
  return (
    <div>
        <Navbar/>
        <NewsItem/>
        <div>
            <h1>Home</h1>
        </div>

    </div>
  )
}

export default Home