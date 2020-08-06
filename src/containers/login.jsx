import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as dataAction from '../action/index'
import Login from '../components/login'

const LoginIndex = (props) => {
  const [checking, setChecking] = useState(true)

  const doCheck = () => {
    if (props.data.userInfo) {
      props.history.push('/')
    } else {
      setChecking(false)
    }
  }

  useEffect(() => {
    doCheck()
  })

  return (
    <div>
      {
        checking ? <div>主页</div> : <Login {...props}/>
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
)(LoginIndex)