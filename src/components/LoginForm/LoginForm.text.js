import React from 'react'
import ReactDOM from 'react-dom'
import LoginForm from '../LoginForm/LoginForm'

it('render without crashing',()=>{
  const div = document.createElement('div')
  ReactDOM.render(
  
  <LoginForm/>
  ,div)
  ReactDOM.unmountComponentAtNode(div)
})