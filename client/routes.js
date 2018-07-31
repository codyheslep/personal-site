import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import Bio from './components/bio'
import Calendar from './components/calendar'
import Media from './components/media'
import Pictures from './components/pictures'
import Experience from './components/experience'
import Contact from './components/contact'

/**
 * COMPONENT
 */
class Routes extends Component {

  render() {

    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/bio' component={Bio} />
        <Route path='/calendar' component={Calendar} />
        <Route path='/media' component={Media} />
        <Route path='/pictures' component={Pictures} />
        <Route path='/experience' component={Experience} />
        <Route path='/contact' component={Contact} />
      </Switch>
    )
  }
}

export default Routes

