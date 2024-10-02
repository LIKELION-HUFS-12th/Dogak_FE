import React from 'react'
import Logo from './logo'
import MainHeader from './header'
import styled from 'styled-components'

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ShowInput = styled.div`
  width: 35vw;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

const InputA = styled.input`
  display: flex;
  width: 100%;
  height: 4vw;
  min-height: 40px;
  margin: 10px;
  border-radius: 5px;
  border: solid 1.3px;
  background-color: #E5E5E5;
  font-size: 18px;
  /* 이거 때문에 100%해도 div 밖으로 나가서 button이랑 넓이 차이 남 근데 그거 말고는 방법을 모르겠어 */
  padding-left: 25px;

  ::placeholder {
    color: #575757;
  }
`
const Button = styled.button`
  display: flex;
  width: 100%;
  height: 4vw;
  min-height: 50px;
  margin: 30px 0px 0px 0px;
  align-items: center;
  justify-content: center;
  font-size: 40px;
`

export default function Login() {
  return (
    <>
      <MainHeader/>
      <Logo/>
      <LoginContainer>
        <ShowInput>
          <InputA placeholder='아이디'/>
          <InputA placeholder='비밀번호' type='password'/>
          <Button>로그인</Button>
        </ShowInput>
      </LoginContainer>
    </>
  )
}
