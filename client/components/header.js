import React from 'react'
import { Image, Icon, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bottombar'>
      <Image src="./codybackground2.png" className="backgroundpic" />
      <div id="homeicon">
        <Link to='/'>
          <Icon name="home" size="huge" color="yellow" />
        </Link>
      </div>
      <div id="projectsicon">
        <Link to='/media'>
          <Icon name="lightbulb" size="huge" color="yellow" />
        </Link>
      </div>
      <div id="writingsicon">
        <Link to='/experience'>
          <Icon name="rocket" size="huge" color="yellow" />
        </Link>
      </div>
      <div id="experienceicon">
        <Link to='/contact'>
          <Icon name="pencil" size="huge" color="yellow" />
        </Link>
      </div>
    </div>
  )
}

export default Header
