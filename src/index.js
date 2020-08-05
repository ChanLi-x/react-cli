import React from 'react'
import ReactDOM from 'react-dom'
import RouterMap from './router/routerMap.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import './styles/index.less'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <RouterMap />
  </Provider>,
  document.getElementById('root'),
)