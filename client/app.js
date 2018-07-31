import React from 'react'

import Navbar from './components/navbar'
import Routes from './routes'
import BottomBar from './components/bottombar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <BottomBar />
    </div>
  )
}

export default App
