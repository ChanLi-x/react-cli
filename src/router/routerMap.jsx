import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import Index from '../containers/index.jsx'
import Home from '../containers/home.jsx'
import List from '../containers/list.jsx'

const RouterMap = () => (
  <Router>
    <Route exact path='/' component={Index} />
    <Route path='/home' component={Home} />
    <Route path='/list' component={List} />
  </Router>
)

export default hot(RouterMap)