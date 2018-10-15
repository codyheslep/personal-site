import React from 'react'
import { Header, Divider, Icon } from 'semantic-ui-react'

const Experience = () => {
  return (
    <div className='content'>
      <Header as='h2' icon textAlign='center'>
      <Icon name="rocket" size="huge" circular color="red" />
      {/* <Header.Content>My Story</Header.Content> */}
    </Header>
    <Divider horizontal section as="h2">My Resume</Divider>
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vSqTp-nFDB4sxoB03JyCZ9qlUIKscyYP5dI_JxvketJq6xBoW_1gLANrs_y3yuTsaeujIqLJhlB8R9A/pub?embedded=true" className="resume"></iframe>
    </div>
  )
}

export default Experience
