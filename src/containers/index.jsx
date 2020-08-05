import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { dataAction } from '../action/index'
import '../styles/index.less'

const Index = (props) => {
  console.log('props', props)
  const { data } = props
  return (
    <div className="body">
      <h1>哈哈哈哈</h1>
      <h3>第一个react-cli</h3>
      <img src={require('../images/1.jpg')} alt=""/>
      <Link to='/list'>跳转</Link>
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
    actions: bindActionCreators({data: dataAction},dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index)