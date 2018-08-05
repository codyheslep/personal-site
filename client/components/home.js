import React from 'react'
import { Container, Card, Image, Header, Divider } from 'semantic-ui-react'

const Home = () => {
  return (
    <div className="content">
      <Header as="h1" textAlign="centered">_____my story_____</Header>
      <Image src="./timeline.png" className="backgroundpic" />
    </div>
  )
}

export default Home
