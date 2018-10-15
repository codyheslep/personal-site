import React from 'react'
import { Container, Card, Item, Image,Grid, Popup, Header, Divider } from 'semantic-ui-react'

const Home = () => {
  return (
    <div className="content">
      <Header as="h1" textAlign="centered">_____my story_____</Header>
      {/* <Image src="./timeline.png" className="backgroundpic" /> */}
    <Grid stackable>
    <Grid.Row columns={3}>
      <Grid.Column color="yellow">
      <Popup
          trigger={<Image src="./child.png" className="pixel"/>}
          content="Born to the mean streets of San Diego, Cody knew the hardships of sunshine and hanging-ten-bruh from an early age. His family moved around a lot so Cody became HIGHLY ADAPTABLE, easily getting along with whomever he came across."
          position="top center"
          />
      </Grid.Column>
      <Grid.Column>
      <Popup
          trigger={<Image src="./kid.png" className="pixel"/>}
          content="Born to the mean streets of San Diego, Cody knew the hardships of sunshine and hanging-ten-bruh from an early age. His family moved around a lot so Cody became HIGHLY ADAPTABLE, easily getting along with whomever he came across."
          position="top center"
          />
      </Grid.Column>
      <Grid.Column color="red">
      <Popup
          trigger={<Image src="./college.png" className="pixel"/>}
          content="Born to the mean streets of San Diego, Cody knew the hardships of sunshine and hanging-ten-bruh from an early age. His family moved around a lot so Cody became HIGHLY ADAPTABLE, easily getting along with whomever he came across."
          position="top center"
          />
      </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3}>
      <Grid.Column >
      <Popup
          trigger={<Image src="./phd.png" className="pixel"/>}
          content="Born to the mean streets of San Diego, Cody knew the hardships of sunshine and hanging-ten-bruh from an early age. His family moved around a lot so Cody became HIGHLY ADAPTABLE, easily getting along with whomever he came across."
          position="top center"
          />
      </Grid.Column>
      <Grid.Column color="red">
      <Popup
          trigger={<Image src="./bartending.png" className="pixel"/>}
          content="Born to the mean streets of San Diego, Cody knew the hardships of sunshine and hanging-ten-bruh from an early age. His family moved around a lot so Cody became HIGHLY ADAPTABLE, easily getting along with whomever he came across."
          position="top center"
          />
      </Grid.Column>
      <Grid.Column color="yellow">
      <Popup
          trigger={<Image src="./fullstack.png" className="pixel"/>}
          content="Born to the mean streets of San Diego, Cody knew the hardships of sunshine and hanging-ten-bruh from an early age. His family moved around a lot so Cody became HIGHLY ADAPTABLE, easily getting along with whomever he came across."
          position="top center"
          />
      </Grid.Column>
    </Grid.Row>
    </Grid>
    </div>
  )
}

export default Home
