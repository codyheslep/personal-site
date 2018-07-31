import React from 'react'
import { Container, Divider } from 'semantic-ui-react'


const Bio = () => {
  return (
    <Container className="content">
      <Container textAlign='center' as='h1'>biography</Container>
      <Divider id="divider" />
      <Container textAlign='justify'>Lucy Duke is a musician and composer in Chicago, IL, holding both Masters and Bachelors degrees in Violin Performance from Northwestern University. Lucy studied primarily with violin pedagogue Gerardo Ribeiro, and previously at Southern Methodist University with violinist Jan Sloman.</Container>
      <Divider hidden />
      <Container textAlign='justify'>Amongst other honors, Lucy was awarded the Anna Schaeffler Lockwood Award for Excellence in String Music, membership in Pi Kappa Lambda--premiere National Music Honor Society, Undergraduate Award for Outstanding Academic Achievement (NU), as well as Presidential Scholar (SMU).</Container>
      <Divider hidden />
      <Container textAlign='justify'>Lucy has been performing and teaching for more than twenty years, and currently plays with Orchestra Iowa in Cedar Rapids and freelances around Chicago.</Container>
    </Container>
  )
}

export default Bio
