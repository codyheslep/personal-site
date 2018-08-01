import React from 'react'
import { Embed, Container, Item, Divider, Header } from 'semantic-ui-react'


const Media = () => {
  return (
    <Container className='content'>
      <Header as="h1" textAlign="centered">m e d i a</Header>
      <Divider />
      <Item className="item">
        <Item.Content verticalAlign='middle'>
          <Item.Header as="h4">The Captive (original score)</Item.Header>
          <Item.Description>Composed and Performed an entirely original score for the previously unreleased 1915 Cecille B. Demille film, "The Captive."</Item.Description>
          <Item.Extra>
            <Item.Description>July 2016</Item.Description>
          </Item.Extra>
        </Item.Content>
      </Item>
      <Embed id='lzA6C93WEig' source='youtube' placeholder='./the-captive-06.jpg' />
      <Divider />
      <Item className="item">
        <Item.Content verticalAlign='middle'>
          <Item.Header as="h4">A View (supporting violin)</Item.Header>
          <Item.Description>Performed with JT Royster for his EP, "Title"</Item.Description>
          <Item.Extra>
            <Item.Description>July 2016</Item.Description>
          </Item.Extra>
        </Item.Content>
      </Item>
      <Embed
        icon='right circle arrow'
        url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/24669977&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        placeholder='./view.jpeg'
      />
      <Divider />
      <Item className="item">
        <Item.Content verticalAlign='middle'>
          <Item.Header as="h4">We Will Go And... (supporting violin)</Item.Header>
          <Item.Description>Performed with Joshua Moishier for his EP, "Title"</Item.Description>
          <Item.Extra>
            <Item.Description>July 2016</Item.Description>
          </Item.Extra>
        </Item.Content>
      </Item>
      <Embed id='BZeUrz8ZWrE' source='youtube' placeholder='./wewillgo.jpg' />
    </Container>
  )
}

export default Media
