import React from 'react'
import { Container, Icon, Segment, Reveal, Card, Item, Image,Grid, Popup, Header, Divider } from 'semantic-ui-react'

const style = {
  borderRadius: .5,
  opacity: 0.8,
  padding: '2px',
}

const Home = () => {
  return (
    <div className="content">
      <Header as='h2' icon textAlign='center'>
      <Icon name="home" size="huge" circular color="red" />
      {/* <Header.Content>My Story</Header.Content> */}
    </Header>
    <Divider horizontal section as="h2">My Story</Divider>
      {/* <Image src="./timeline.png" className="backgroundpic" /> */}
    <Grid stackable>
    <Grid.Row columns={3}>
      <Grid.Column color="yellow">
      {/* <Popup
          trigger={<Image src="./child.png" className="pixel"/>}
          content="Born to the mean streets of San Diego, Cody knew the hardships of sunshine and hanging-ten-bruh from an early age. His family moved around a lot so Cody became HIGHLY ADAPTABLE, easily getting along with whomever he came across."
          position="bottom center"
          inverted
          size="large"
          wide
          style={style}
          /> */}
    <Reveal animated='move'>
    <Reveal.Content visible>
    <Image src="./child.png" className="pixel"/>
    </Reveal.Content>
    <Reveal.Content hidden>
    <div>
    <Container text textAlign="center">
    <p>
      Born to the mean streets of San Diego, Cody knew the hardships of sunshine and hanging-ten-bruh from an early age. His family moved around a lot so Cody became HIGHLY ADAPTABLE, easily getting along with whomever he came across.
      </p>
      </Container>
      </div>
    </Reveal.Content>
  </Reveal>
      </Grid.Column>
      <Grid.Column color="white">
      <Popup
          trigger={<Image src="./kid.png" className="pixel"/>}
          content="As he grew up, Cody was very INQUISITIVE and took part in a wide variety of activities including sports, book clubs, student government, and magic the gathering tournaments (his girlfriend told him to leave out the magic part). His favorite hobby was making movies with his best friend, and he learned from an early age that he always needed a CREATIVE outlet."
          position="bottom center"
          inverted
          size="large"
          wide
          style={style}
          />
      </Grid.Column>
      <Grid.Column color="yellow">
      <Popup
          trigger={<Image src="./college.png" className="pixel"/>}
          content="In college, when he wasn't busy studying or working, Cody started to dabble in programming, teaching himself JAVA and JAVASCRIPT. With his new tools he wrote a stat collection app and site for a self-run beer pong league, pouring every free second he had into improving the program."
          position="bottom center"
          inverted
          size="large"
          wide
          style={style}
          />
      </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3}>
      <Grid.Column color="white">
      <Popup
          trigger={<Image src="./phd.png" className="pixel"/>}
          content="After college, Cody obtained a Masters in Ancient Greek History at the University of Missouri. Soon after, he pursued his PhD at the University of Chicago. Somewhere about halfway through a 500 page book on ancient coins in which there 0 PICTURES (not kidding), Cody decided that he wanted to work in a field that was more COLLABORATIVE (and had fewer ancient coins)."
          position="top center"
          inverted
          size="large"
          wide
          style={style}
          />
      </Grid.Column>
      <Grid.Column color="yellow">
      <Popup
          trigger={<Image src="./bartending.png" className="pixel"/>}
          content="Cody then bartended at a busy restaurant on Chicago's Mag Mile as he plotted his next moves. His LEADERSHIP skills soon earned him a promotion to bar manager where he was able to curate a top-notch wine and beer program while lowering alcohol costs by over 5%. After recieving an offer for another promotion, Cody decided the restaurant industry was not where his future lay."
          position="top center"
          inverted
          size="large"
          wide
          style={style}
          />
      </Grid.Column>
      <Grid.Column color="white">
      <Popup
          trigger={<Image src="./fullstack.png" className="pixel"/>}
          content="Remembering all the joy that programming had brought him in college, he decided to return to the tech world. He attended Fullstack Code Academy in Chicago, completing their 17-week intensive program in web development. In those demanding weeks, and in the weeks since, Cody learned React, Node.js, Express, Redux, React-Native, SQL, Postgres, and many other things."
          position="top center"
          inverted
          size="large"
          wide
          style={style}
          />
      </Grid.Column>
    </Grid.Row>
    </Grid>
    </div>
  )
}

export default Home
