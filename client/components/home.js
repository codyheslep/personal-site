import React from 'react'
import { Container, Card, Header, Divider } from 'semantic-ui-react'

const Home = () => {
  return (
    <Container className="content">
      <Header textAlign='centered' as="h1">b i o g r a p h y</Header>
      <Divider />
      <Container textAlign='justified'>Lucy Duke is a musician and composer in Chicago, IL, holding both Masters and Bachelors degrees in Violin Performance from Northwestern University. Lucy studied primarily with violin pedagogue Gerardo Ribeiro, and previously at Southern Methodist University with violinist Jan Sloman.</Container>
      <Divider hidden />
      <Container textAlign='justified'>Amongst other honors, Lucy was awarded the Anna Schaeffler Lockwood Award for Excellence in String Music, membership in Pi Kappa Lambda--premiere National Music Honor Society, Undergraduate Award for Outstanding Academic Achievement (NU), as well as Presidential Scholar (SMU).</Container>
      <Divider hidden />
      <Container textAlign='justified'>Lucy has been performing and teaching for more than twenty years, and currently plays with Orchestra Iowa in Cedar Rapids and freelances around Chicago.</Container>
      <Divider />
      <Header textAlign='centered' as="h1">c u r r e n t - a p p o i n t m e n t s</Header>
      <Divider />
      <Card.Group itemsPerRow={3}>
        <Card
          raised
          image='./desmoines.png'
          header='Des Moines Symphony'
          meta='2016-Current'
          description='Sectional Violinist'
        />
        <Card
          raised
          image='./iowa.png'
          header='Orchestra Iowa'
          meta='2016-Current'
          description='Sectional Violinist'
        />
        <Card
          raised
          image='./andersonville.png'
          header='Andersonville Strings Academy'
          meta='2016-Current'
          description='Teacher'
        />
      </Card.Group>
      <Divider />
      <Header textAlign='centered' as="h1">e d u c a t i o n</Header>
      <Divider />
      <Card.Group itemsPerRow={3}>
        <Card
          raised
          image='./northwestern.png'
          header='Northwestern University'
          meta='2010-2012'
          description='MM Violin Performance'
        />
        <Card
          raised
          image='./holloway.png'
          header='Royal Holloway University'
          meta='2007-2008'
          description='BM Violin Performance'
        />
        <Card
          raised
          image='./smu.png'
          header='Southern Methodist University'
          meta='2005-2008'
          description='BM Violin Performance'
        />
      </Card.Group>
    </Container>
  )
}

export default Home
