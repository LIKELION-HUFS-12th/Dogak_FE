import React from 'react';
import Logo from './logo';
import MainHeader from './header';
import styled from 'styled-components';
import { InputA, Button } from './formstyle';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ShowInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  ul {
    width: 480px;
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }

  li {
    cursor: pointer;
    font-size: 17px;
    color: #575757;
  }
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
          <ul>
            <li>
              아이디/비밀번호 찾기
            </li>
            <li>
              회원가입
            </li>
          </ul>
        </ShowInput>
      </LoginContainer>
    </>
  )
}
