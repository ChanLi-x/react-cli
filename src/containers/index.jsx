import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as dataAction from '../action/index'
import Home from './home'
import '../styles/index.less'

const Index = (props) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },1000)
  }, [])

  console.log('props', props)

  return (
    <div>
      {
        loading ? <div>...正在加载中</div> : <Home />
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.home,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(dataAction,dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index)