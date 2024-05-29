import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Search from './components/Search'

const App = () => {
  return (
    <div className='App text-white overflow-hidden'>
      <Header></Header>
      <Hero></Hero>
      <Experience></Experience>
      <Search></Search>
    </div>
    
  )
}

export default App


