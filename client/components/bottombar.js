import React from 'react'
import { Container, Divider } from 'semantic-ui-react'


const BottomBar = () => {
  return (
    <div className='bottombar'>
      <Divider hidden />
      <Divider />
      <Container textAlign='center' as='h5'>created by cody heslep | codyheslep@gmail.com</Container>
      <Divider hidden />
    </div>
  )
}

export default BottomBar
