import React from 'react'
import Logo from './logo'
import MainHeader from './header'

export default function Login() {
  return (
    <>
      <MainHeader/>
      <Logo/>
      <div>
        <input placeholder='아이디'/>
        <input placeholder='비밀번호' type='password'/>
        <button>로그인</button>
      </div>
    </>
  )
}
