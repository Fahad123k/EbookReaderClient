import React from 'react'
import HomeContent from './HomeContent'
import Footer from '../components/Footer'
import LibraryFeatureCards from './adminpage/LibraryFeatureCard'

const Home = () => {
  return (
    <div>
      <HomeContent/>
      <LibraryFeatureCards/>
      <Footer/>
     
    </div>
  )
}

export default Home