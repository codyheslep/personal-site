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
        <Header as="h1" textAlign="centered">c o n t a c t - i n f o r m a t i o n</Header>
        <Divider />
        <Container textAlign='centered' id="contactinfo">
          <Icon color="peach" size="huge" name="mail" /> lucynduke@gmail.com <Icon color="#db4d41" size="huge" name="phone" /> (872) 808.6111
          </Container>
        <Divider />
        <Header as="h1" textAlign="centered">r e q u e s t - i n f o r m a t i o n</Header>
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
