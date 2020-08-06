import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => {
  console.log('props',props)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleUserChange = (e) => {
    setUserName(e.target.value)
  }

  const handlePaassChange = (e) => {
    setPassword(e.target.value)
  }

  const submitClick = () => {
    if (+userName === 123 && +password === 123) {
      alert('登陆成功')
      props.actions.dataAction({userName,password})
      props.history.push('/')
    } else {
      alert('用户名或者密码错误')
      return
    }
  }

  return (
    <div>
      <div>登陆组件</div>
      <div>
        <span>用户名：</span>
        <input
          type="text"
          placeholder="输入用户名"
          onChange={handleUserChange}
          value={userName}
        />
      </div>
      <div>
        <span>密码：</span>
        <input
          type="text"
          placeholder="输入用户名"
          onChange={handlePaassChange}
          value={password}
        />
      </div>
      <button onClick={submitClick}>登陆</button>
    </div>
  )
}

export default Login