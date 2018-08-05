import React from 'react'
import Header from './components/header'
import Navbar from './components/navbar'
import Routes from './routes'
import BottomBar from './components/bottombar'
import { Sticky } from 'semantic-ui-react'

const App = () => {
  return (
    <div>
      <Header />
      {/* <Sticky>
        <Navbar />
      </Sticky> */}
      <Routes />
      <BottomBar />
    </div>
  )
}

export default App
