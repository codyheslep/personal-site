import React from 'react'
import { Container, Form, Icon, Button, Header, Divider, Input, TextArea } from 'semantic-ui-react'
import axios from 'axios'

class Contact extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      phone: '',
      about: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event, value) {
    this.setState({ [value.id]: value.value })
    console.log(value.id, value.value)
  }

  handleSubmit = (event, value) => {

    axios.post('/api/submit', this.state)
    console.log("submitted!")
    this.setState({
      name: '',
      email: '',
      phone: 0,
      about: '',
    })
  }

  render() {
    return (
      <Container className="content" >
        <Header as='h2' icon textAlign='center'>
      <Icon name="pencil" size="huge" circular color="red" />
      {/* <Header.Content>My Story</Header.Content> */}
    </Header>
    <Divider horizontal section as="h2">Contact Info</Divider>
        <Container textAlign='centered' id="contactinfo">
          <Icon color="black" size="huge" name="mail" /> codyheslep@gmail.com <Icon color="black" size="huge" name="phone" /> (936) 777.0952
          </Container>
        <Divider />
        <div className="custom-form">
          <Form onSubmit={this.handleSubmit} itemsPerRow={3} >
            {/* <Form.Group widths='equal' > */}
            <Form.Field width={15} control={Input} label='name' id='name' value={this.state.name} placeholder='name' onChange={this.handleChange} />
            <Form.Field width={15} control={Input} label='email' id='email' value={this.state.email} placeholder='email@email.com' onChange={this.handleChange} />
            <Form.Field width={15} control={Input} label='phone' id='phone' value={this.state.phone} placeholder='(777)555-5555' onChange={this.handleChange} />
            <Form.Field width={15} control={TextArea} label='about' id='about' value={this.state.about} placeholder='Tell me more about how I can help...' onChange={this.handleChange} />
            <Form.Field control={Button}>Submit</Form.Field>
            {/* </Form.Group> */}
          </Form>
        </div>
      </Container >
    )
  }
}

export default Contact
