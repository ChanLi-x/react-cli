import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div>home页</div>
      <Link to="/login">登陆</Link>
    </div>
  )
}

export default Home